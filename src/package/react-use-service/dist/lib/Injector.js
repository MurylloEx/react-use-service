import { Logger } from './Logger';
import { ServiceFacade } from './Facade';
/**
 * The Injector stores services and resolves requested instances.
 */
export class Injector {
    constructor(serviceContainer) {
        this.logger = new Logger();
        this.container = serviceContainer;
    }
    truthyOnThrowError(action) {
        try {
            return !!action();
        }
        catch (e) {
            return false;
        }
    }
    hasResolvedDependency(token) {
        return this.truthyOnThrowError(() => this.container.get(token));
    }
    hasCircularDependency(tokens) {
        return tokens.length > 0 ?
            tokens.some(dep => typeof dep === 'undefined') : false;
    }
    hasUnresolvedDependency(injections) {
        return injections.length > 0 ?
            injections.some(dep => typeof dep === 'undefined') : false;
    }
    forwardRef(token) {
        return this.hasResolvedDependency(token) ?
            this.container.get(token) :
            this.resolve(token);
    }
    resolve(target) {
        try {
            //Tokens are required dependencies, while injections are resolved tokens from the Injector
            if (!this.container.isExportedDependency(target))
                throw new TypeError(`Cannot resolve the service [${target.name}] because it wasn't exported in providers.`);
            if (ServiceFacade.isValidService(target.prototype)) {
                if (this.hasResolvedDependency(target))
                    return this.container.get(target);
                const tokens = ServiceFacade.getServiceTokens(target);
                if (!this.hasCircularDependency(tokens)) {
                    const injections = tokens.map((token) => this.forwardRef(token));
                    if (!this.hasUnresolvedDependency(injections)) {
                        const service = this.container.load(new target(...injections));
                        this.logger.info(`Loaded service [${target.name}] to memory by dependency injection.`);
                        return service;
                    }
                    throw new ReferenceError(`Cannot resolve one or more dependencies of service [${target.name}].`);
                }
                throw new ReferenceError(`Circular dependency detected in [${target.name}].`);
            }
            throw new TypeError(`Invalid provided service [${target.name}], services should be decorated with @Service.`);
        }
        catch (e) {
            this.logger.fatal(e);
            return {};
        }
    }
    resolveAll() {
        this.container.getDependencies()
            .map(dep => this.resolve(dep));
        return this.container;
    }
    static create(serviceContainer) {
        return new Injector(serviceContainer);
    }
}
;
//# sourceMappingURL=Injector.js.map