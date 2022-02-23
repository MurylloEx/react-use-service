import 'reflect-metadata';
import React, { useEffect } from 'react';
import { useService } from './lib';
import { UserService } from './tests';
import './App.css';

export function App() {
  const user = useService<UserService>(UserService);

  useEffect(() => {
    user.editUser(3);
  }, [user]);

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

