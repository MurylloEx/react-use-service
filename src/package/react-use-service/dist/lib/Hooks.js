import { useContext } from 'react';
import { ServiceContext } from './Provider';
export function useServiceContainer() {
    const context = useContext(ServiceContext);
    if (!context)
        throw new Error('useServiceContainer must be used within a ServiceProvider.');
    return context;
}
export function useService(serviceClass) {
    const container = useServiceContainer();
    return container.get(serviceClass);
}
//# sourceMappingURL=Hooks.js.map