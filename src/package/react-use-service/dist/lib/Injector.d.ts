import { Instantiable } from './Types';
import { IServiceContainer } from './Container';
/**
 * The Injector stores services and resolves requested instances.
 */
export declare class Injector {
    private container;
    private logger;
    private constructor();
    private truthyOnThrowError;
    private hasResolvedDependency;
    private hasCircularDependency;
    private hasUnresolvedDependency;
    private forwardRef;
    resolve<T>(target: Instantiable<any, any>): T;
    resolveAll(): IServiceContainer;
    static create(serviceContainer: IServiceContainer): Injector;
}
