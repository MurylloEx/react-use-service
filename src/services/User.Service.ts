import { Service } from 'react-use-service';
import { MyLoggerService } from './MyLogger.Service';

@Service()
export class UserService {

  constructor(private logger: MyLoggerService) {}

  editUser(userId: number) {
    this.logger.info(`User ${userId} has been edited`);
  }
  
}