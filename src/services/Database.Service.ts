import { Service } from 'react-use-service';

@Service()
export class DatabaseService {

  constructor() {}

  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data);
  }

}
