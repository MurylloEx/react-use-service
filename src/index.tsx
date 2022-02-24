import 'reflect-metadata';
import { App } from 'src/App';
import ReactDOM from 'react-dom';
import { ServiceContainer, ServiceProvider } from 'react-use-service';
import { DatabaseService, MyLoggerService, UserService } from './services';

import './index.css';

const Container = ServiceContainer.create().providers([
  DatabaseService,
  MyLoggerService,
  UserService,
]);

ReactDOM.render(
  <ServiceProvider container={Container}>
    <App />
  </ServiceProvider>,
  document.getElementById('root')
);

