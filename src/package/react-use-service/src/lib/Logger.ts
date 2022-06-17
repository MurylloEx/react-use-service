/**
 * Logger class that allow us to show when a service is loaded, for example.
 */
export class Logger {

  log(type: string, message: string) {
    console.log(`[${type}] ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} ${message}`);
  }

  info(message: string) {
    this.log('INFO', message);
  }

  fatal(error: Error) {
    this.log('FATAL', `${error.name} - ${error.message}`);
  }

}
