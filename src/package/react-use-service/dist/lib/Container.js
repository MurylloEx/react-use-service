import { ServiceFacade } from "./Facade";
/**
 * Class that stores our services loaded in memory.
 */
export class ServiceContainer {
    constructor() {
        this.dependencies = [];
        this.loadedDependencies = [];
    }
    providers(services) {
        this.dependencies = services;
        return this;
    }
    load(instance) {
        const length = this.loadedDependencies.push(instance);
        return this.loadedDependencies[length - 1];
    }
    unloadAll() {
        this.loadedDependencies = [];
        return this;
    }
    getDependencies() {
        return this.dependencies;
    }
    getLoadedDependencies() {
        return this.loadedDependencies;
    }
    get(serviceClass) {
        //Retrieve a specific service from container.
        if (!this.isExportedDependency(serviceClass))
            throw new TypeError(`Cannot resolve the service [${serviceClass.name}] because it wasn't exported in providers.`);
        const classInfo = ServiceFacade.getServiceInfo(serviceClass.prototype);
        const foundService = this.getLoadedDependencies().find((service) => {
            const serviceInfo = ServiceFacade.getServiceInfo(service);
            return serviceInfo.uuid === classInfo.uuid;
        });
        if (foundService)
            return foundService;
        throw new TypeError(`Cannot find the service [${serviceClass.name}] in container.`);
    }
    isExportedDependency(dependency) {
        const classInfo = ServiceFacade.getServiceInfo(dependency.prototype);
        return this.getDependencies().some((service) => {
            const serviceInfo = ServiceFacade.getServiceInfo(service.prototype);
            return serviceInfo.uuid === classInfo.uuid;
        });
    }
    static create() {
        return new ServiceContainer();
    }
}
//# sourceMappingURL=Container.js.map