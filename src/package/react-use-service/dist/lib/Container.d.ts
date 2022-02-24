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
export declare class ServiceContainer implements IServiceContainer {
    private dependencies;
    private loadedDependencies;
    private constructor();
    providers(services: any[]): this;
    load<T>(instance: any): T;
    unloadAll(): this;
    getDependencies(): any[];
    getLoadedDependencies(): any[];
    get<K>(serviceClass: any): K;
    isExportedDependency(dependency: any): boolean;
    static create(): ServiceContainer;
}
