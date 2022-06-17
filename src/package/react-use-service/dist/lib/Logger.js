export class Logger {
    log(type, message) {
        console.log(`[${type}] ${new Date().toLocaleTimeString()} at ${new Date().toLocaleTimeString()} ${message}`);
    }
    info(message) {
        this.log('INFO', message);
    }
    fatal(error) {
        this.log('FATAL', `${error.name} - ${error.message}`);
    }
}
//# sourceMappingURL=Logger.js.map