import 'reflect-metadata';
import { Service } from "src/lib";

@Service()
export class DatabaseHandler {
  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data);
  }
}

@Service()
export class MyLogger {
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

