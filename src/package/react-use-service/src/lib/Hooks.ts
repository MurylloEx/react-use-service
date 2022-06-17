import { useContext } from 'react';
import { ServiceContext } from './Provider';
import { IServiceContainer } from './Container';

export function useServiceContainer(): IServiceContainer {
  const context = useContext(ServiceContext);
  if (!context) throw new Error('useServiceContainer must be used within a ServiceProvider.');
  return context;
}

export function useService<K>(serviceClass: any): K {
  const container: IServiceContainer = useServiceContainer();
  return container.get<K>(serviceClass);
}
