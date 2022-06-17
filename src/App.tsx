import 'reflect-metadata';
import React, { useEffect } from 'react';
import { useService } from 'react-use-service';
import { UserService } from './services';

import './App.css';

export function App() {
  const userService = useService<UserService>(UserService);

  useEffect(() => {
    userService.editUser(3);
  }, [userService]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

