import { Injector } from './Injector';
import { IServiceContainer, ServiceContainer } from './Container';
import { createContext, FunctionComponent, useRef } from 'react';

const DefaultContainer: IServiceContainer = ServiceContainer.create();

export const ServiceContext = createContext<IServiceContainer>(DefaultContainer);

export interface ServiceProviderProps {
  container?: IServiceContainer;
  children?: React.ReactNode;
}

export const ServiceProvider: FunctionComponent<ServiceProviderProps> = ({ children, container }) => {
  const containerRef = useRef<IServiceContainer>(container || DefaultContainer);
  const injectorRef = useRef<Injector>(Injector.create(containerRef.current));
  
  const numOfLoadedDependencies = containerRef.current.getLoadedDependencies().length;

  if (numOfLoadedDependencies == 0) {
    injectorRef.current.resolveAll();
  }

  return (
    <ServiceContext.Provider value={containerRef.current}>
      {children}
    </ServiceContext.Provider>
  );
}
