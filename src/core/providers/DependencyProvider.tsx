import React, { FunctionComponent } from 'react';
import { ServiceContainer, ServiceProvider } from 'react-use-service';
import { AxiosService, HttpService, NasaService } from 'src/core/services';

const Container = ServiceContainer.create().providers([
  AxiosService,
  HttpService,
  NasaService
]);

export interface DependencyProviderProps {
  children: React.ReactNode;
}

export const DependencyProvider: FunctionComponent<DependencyProviderProps> = ({ children }) => {
  return (
    <ServiceProvider container={Container}>
      {children}
    </ServiceProvider>
  );
}
