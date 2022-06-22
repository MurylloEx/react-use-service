import React, { FunctionComponent } from 'react';
import { QueryProvider } from './QueryProvider';
import { DependencyProvider } from './DependencyProvider';

export interface ApplicationProviderProps {
  children: React.ReactNode;
}

export const ApplicationProvider: FunctionComponent<ApplicationProviderProps> = ({ children }) => {
  return (
    <QueryProvider>
      <DependencyProvider>
        {children}
      </DependencyProvider>
    </QueryProvider>
  );
}
