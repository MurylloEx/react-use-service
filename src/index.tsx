import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'src/App';
import { ServiceContainer, ServiceProvider } from './package/react-use-service/dist';
import { DatabaseHandler, MyLogger, UserService } from './services';
import './index.css';

const Container = ServiceContainer.create().providers([
  DatabaseHandler,
  MyLogger,
  UserService,
]);

ReactDOM.render(
  <ServiceProvider container={Container}>
    <App />
  </ServiceProvider>,
  document.getElementById('root')
);

