import { ServiceInfo } from './Types';
import { ServiceFacade } from './Facade';

/**
 * Interface that define how a Service Container should be.
 */
export interface IServiceContainer {
  providers(services: any[]): IServiceContainer;
  load<T>(instance: any): T;
  unloadAll(): IServiceContainer;
  getDependencies(): any[];
  getLoadedDependencies(): any[];
  get<K>(serviceClass: any): K;
  isExportedDependency(dependency: any): boolean;
}

/**
 * Class that stores our services loaded in memory.
 */
export class ServiceContainer implements IServiceContainer {

  private dependencies: any[] = [];
  private loadedDependencies: any[] = [];

  private constructor() { }

  public providers(services: any[]) {
    this.dependencies = services;
    return this;
  }

  public load<T>(instance: any): T {
    const length = this.loadedDependencies.push(instance);
    return this.loadedDependencies[length - 1] as T;
  }

  public unloadAll() {
    this.loadedDependencies = [];
    return this;
  }

  public getDependencies() {
    return this.dependencies;
  }

  public getLoadedDependencies() {
    return this.loadedDependencies;
  }

  public get<K>(serviceClass: any): K {
    //Retrieve a specific service from container.
    if (!this.isExportedDependency(serviceClass))
      throw new TypeError(`Cannot resolve the service [${serviceClass.name}] because it wasn't exported in providers.`);

    const classInfo: ServiceInfo = ServiceFacade.getServiceInfo(serviceClass.prototype);

    const foundService: K = this.getLoadedDependencies().find((service) => {
      const serviceInfo: ServiceInfo = ServiceFacade.getServiceInfo(service);
      return serviceInfo.uuid === classInfo.uuid;
    });

    if (foundService)
      return foundService;

    throw new TypeError(`Cannot find the service [${serviceClass.name}] in container.`);
  }

  public isExportedDependency(dependency: any): boolean {
    const classInfo: ServiceInfo = ServiceFacade.getServiceInfo(dependency.prototype);

    return this.getDependencies().some((service) => {
      const serviceInfo: ServiceInfo = ServiceFacade.getServiceInfo(service.prototype);
      return serviceInfo.uuid === classInfo.uuid;
    });
  }

  public static create() {
    return new ServiceContainer();
  }

}