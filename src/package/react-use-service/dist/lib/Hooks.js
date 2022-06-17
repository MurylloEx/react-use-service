import { useContext } from 'react';
import { ServiceContext } from './Provider';
/**
 * Return the instance of ServiceContainer if the current component is wrapped into ServiceProvider.
 *
 * @returns Return the instance of ServiceContainer.
 */
export function useServiceContainer() {
    const context = useContext(ServiceContext);
    if (!context)
        throw new Error('useServiceContainer must be used within a ServiceProvider.');
    return context;
}
/**
 * Return the service loaded into service container.
 *
 * @param serviceClass The service type that will be searched in service container.
 * @returns Type of the returned service instance.
 */
export function useService(serviceClass) {
    const container = useServiceContainer();
    return container.get(serviceClass);
}
//# sourceMappingURL=Hooks.js.map