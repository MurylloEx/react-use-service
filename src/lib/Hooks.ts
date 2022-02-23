import { useContext } from 'react';
import { IServiceContainer } from './Container';
import { ServiceContext } from './Provider';

export function useServiceContainer(): IServiceContainer {
  const context = useContext(ServiceContext);
  if (!context) throw new Error('useServiceContainer must be used within a ServiceProvider.');
  return context;
}

export function useService<K>(serviceClass: any): K {
  const container: IServiceContainer = useServiceContainer();
  console.log(container)
  return container.get<K>(serviceClass);
}
