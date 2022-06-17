import { IServiceContainer } from './Container';
/**
 * Return the instance of ServiceContainer if the current component is wrapped into ServiceProvider.
 *
 * @returns Return the instance of ServiceContainer.
 */
export declare function useServiceContainer(): IServiceContainer;
/**
 * Return the service loaded into service container.
 *
 * @param serviceClass The service type that will be searched in service container.
 * @returns Type of the returned service instance.
 */
export declare function useService<K>(serviceClass: any): K;
