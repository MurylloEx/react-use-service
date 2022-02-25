<h1 align="center">React Use Service</h1>
<p align="center">
  <img src="https://i.imgur.com/HPX7AP1.png" width="120" alt="React Logo" />
</p>
<h2 align="center">This project was created to use Dependency Injection in React</h2>
<p align="center">This package aims to help users of React and React Native to use Dependency Injection (DI) and service pattern.</p>
<p align="center">
  <img src="https://badgen.net/badge/lang/TypeScript/purple?icon=label"/> 
  <img src="https://badgen.net/badge/license/MIT/green?icon=label"/>
  <img src="https://badgen.net/badge/authors/Muryllo/red?icon=label"/>
  <img src="https://badgen.net/badge/frontend/React/orange?icon=label"/>
</p>

To use this you need the latest version of React, Node.js and npm/yarn.

## Installation

```sh
git clone https://github.com/MurylloEx/react-use-service.git
cd react-use-service
npm install
npm start
```

Add the following lines in your tsconfig.json to enable experimental decorators and emit decorator metadata.

`tsconfig.json`
```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```

## Example

`services.ts`
```ts
@Service()
export class DatabaseService {

  constructor() {}

  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data);
  }

}

@Service()
export class MyLoggerService {
  
  constructor(private dbService: DatabaseService) {}

  info(message: string) {
    this.dbService.insert('log', {
      level: 200,
      message: message
    });
  }

}

@Service()
export class UserService {
  
  constructor(private logger: MyLoggerService) {}

  editUser(userId: number) {
    this.logger.info(`User ${userId} has been edited`);
  }

}
```

`index.tsx`
```tsx
const Container = ServiceContainer.create().providers([
  DatabaseService,
  MyLoggerService,
  UserService
]);

ReactDOM.render(
  <ServiceProvider container={Container}>
    <App />
  </ServiceProvider>,
  document.getElementById('root')
);
```

`App.tsx`
```tsx
export function App() {
  const user = useService<UserService>(UserService);

  useEffect(() => {
    user.editUser(3);
  }, [user]);

  return (
    <p>Hello world!</p>
  );
}
```

## Metadata

```
Muryllo Pimenta – muryllo.pimenta@upe.br
```

Distribuído sobre a licença MIT. Veja ``LICENSE`` para mais informações.

## Contributing

1. Fork it (<https://github.com/MurylloEx/react-use-service/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request