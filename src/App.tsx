import 'reflect-metadata';
import React from 'react';
import './App.css';
import { useService } from './lib';
import { UserService } from './tests';
import { EasyClassDecorator, EasyMethodDecorator, getEasyMetadataEntries } from '@muryllo/easy-decorators';

const MyDecorator = () => EasyClassDecorator('teste', {});
const MyProcDecorator = () => EasyMethodDecorator('aaa', {});

@MyDecorator()
export class Teste {

  constructor(aa: string) {}

  @MyProcDecorator()
  doSomething(){
    console.log('Hi!');
  }

}

export function App() {

  const user = useService<UserService>(UserService);
  console.log(user.editUser(3));

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

