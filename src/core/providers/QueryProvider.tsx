import { QueryClient, QueryClientProvider } from 'react-query';
import React, { FunctionComponent } from 'react';

const Client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      enabled: false,
    },
  },
});

export interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: FunctionComponent<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={Client}>
      {children}
    </QueryClientProvider>
  );
}
