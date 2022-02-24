import { Service } from 'react-use-service';
import { DatabaseService } from './Database.Service';

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
