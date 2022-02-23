import 'reflect-metadata';
import { Service, ServiceContainer } from "src/lib";

@Service()
class DatabaseHandler {

  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data);
  }

}

@Service()
class MyLogger {

  constructor(protected dbHandler: DatabaseHandler) {}

  info(message: string) {
    this.dbHandler.insert('log', {
      level: 200,
      message: message
    });
  }

}

@Service()
export class UserService {

  constructor(private logger: MyLogger) {}

  editUser(userId: number) {
    this.logger.info(`User ${userId} has been edited`);
  }

}

export const Container = ServiceContainer.create().providers([
  DatabaseHandler,
  MyLogger,
  UserService,
]);

// const userService: UserService = container.get<UserService>(UserService);
// userService.editUser(3);
