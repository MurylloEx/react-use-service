import moment from 'moment';
export class Logger {
    log(type, message) {
        console.log(`[${type}] ${moment().format('YYYY-MM-DD [at] hh:mm:ss.SSS')} ${message}`);
    }
    info(message) {
        this.log('INFO', message);
    }
    fatal(error) {
        this.log('FATAL', `${error.name} - ${error.message}`);
    }
}
//# sourceMappingURL=Logger.js.map