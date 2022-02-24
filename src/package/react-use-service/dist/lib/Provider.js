import { jsx as _jsx } from "react/jsx-runtime";
import { Injector } from './Injector';
import { ServiceContainer } from './Container';
import { createContext, useRef } from 'react';
const DefaultContainer = ServiceContainer.create();
export const ServiceContext = createContext(DefaultContainer);
export const ServiceProvider = ({ children, container }) => {
    const containerRef = useRef(container || DefaultContainer);
    const injectorRef = useRef(Injector.create(containerRef.current));
    const numOfLoadedDependencies = containerRef.current.getLoadedDependencies().length;
    if (numOfLoadedDependencies === 0) {
        injectorRef.current.resolveAll();
    }
    return (_jsx(ServiceContext.Provider, Object.assign({ value: containerRef.current }, { children: children }), void 0));
};
//# sourceMappingURL=Provider.js.map