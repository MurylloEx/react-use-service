//import { Logger } from 'tslog';
//import { info, error } from 'loglevel';
import { IServiceContainer } from './Container';
import { ServiceFacade } from './Facade';
import { Instantiable } from './Types';

/**
 * The Injector stores services and resolves requested instances.
 */
export class Injector {

  private container: IServiceContainer;
  //private logger: Logger = new Logger();

  private constructor(serviceContainer: IServiceContainer) {
    this.container = serviceContainer;
  }

  private truthyOnThrowError(action: () => any | void): boolean {
    try {
      return !!action();
    } catch (e) {
      return false;
    }
  }

  private hasResolvedDependency(token: Instantiable<any, any>): boolean {
    return this.truthyOnThrowError(() => this.container.get<typeof token>(token));
  }

  private hasCircularDependency(tokens: Instantiable<any, any>[]): boolean {
    return tokens.length > 0 ? 
      tokens.some(dep => typeof dep === 'undefined') : false;
  }

  private hasUnresolvedDependency(injections: Instantiable<any, any>[]): boolean {
    return injections.length > 0 ?
      injections.some(dep => typeof dep === 'undefined') : false;
  }

  private forwardRef(token: Instantiable<any, any>): Instantiable<any, any> {
    return this.hasResolvedDependency(token) ?
      this.container.get<typeof token>(token) :
      this.resolve<typeof token>(token);
  }

  resolve<T>(target: Instantiable<any, any>): T {
    try {
      //Tokens are required dependencies, while injections are resolved tokens from the Injector
      if (!this.container.isExportedDependency(target))
        throw new TypeError(`Cannot resolve the service [${target.name}] because it wasn't exported in providers.`);
      
      if (ServiceFacade.isValidService(target.prototype)){
        if (this.hasResolvedDependency(target))
          return this.container.get<T>(target);
  
        const tokens: any[] = ServiceFacade.getServiceTokens(target);

        if (!this.hasCircularDependency(tokens)){
          const injections = tokens.map((token) => this.forwardRef(token));
  
          if (!this.hasUnresolvedDependency(injections)){
            const service = this.container.load<T>(new target(...injections));
  
            console.log(`Loaded service [${target.name}] to memory by dependency injection.`);

            return service;
          }
  
          throw new ReferenceError(`Cannot resolve one or more dependencies of service [${target.name}].`);
        }
        throw new ReferenceError(`Circular dependency detected in [${target.name}].`);
      }
      throw new TypeError(`Invalid provided service [${target.name}], services should be decorated with @Service.`);
    } catch (e) {
      console.error(e);
      return {} as T;
    }
  }

  resolveAll() {
    this.container.getDependencies()
      .map(dep => this.resolve<any>(dep));
    return this.container;
  }

  public static create(serviceContainer: IServiceContainer): Injector {
    return new Injector(serviceContainer);
  }

};
