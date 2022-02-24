import moment from 'moment';

export class Logger {

  log(type: string, message: string) {
    console.log(`[${type}] ${moment().format('YYYY-MM-DD [at] hh:mm:ss.SSS')} ${message}`);
  }

  info(message: string) {
    this.log('INFO', message);
  }

  fatal(error: Error) {
    this.log('FATAL', `${error.name} - ${error.message}`);
  }

}