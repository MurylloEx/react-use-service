export class Logger {

  log(type: string, message: string) {
    console.log(`[${type}] ${new Date().toLocaleTimeString()} at ${new Date().toLocaleTimeString()} ${message}`);
  }

  info(message: string) {
    this.log('INFO', message);
  }

  fatal(error: Error) {
    this.log('FATAL', `${error.name} - ${error.message}`);
  }

}
