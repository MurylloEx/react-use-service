/**
 * Logger class that allow us to show when a service is loaded, for example.
 */
export declare class Logger {
    log(type: string, message: string): void;
    info(message: string): void;
    fatal(error: Error): void;
}
