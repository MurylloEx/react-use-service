import React, { FunctionComponent } from 'react';
import { BrowserRoutes } from 'src/routes';
import { ApplicationProvider } from 'src/core';

export const App: FunctionComponent = () => {
  return (
    <ApplicationProvider>
      <BrowserRoutes />
    </ApplicationProvider>
  );
}
