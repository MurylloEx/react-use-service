import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'src/App';
import { Container } from './tests';
import { ServiceProvider } from './lib';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ServiceProvider container={Container}>
      <App />
    </ServiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

