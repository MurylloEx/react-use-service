import 'reflect-metadata';
import { ServiceInfo } from './Types';
/**
 * A simple class with common methods used with services.
 */
export declare class ServiceFacade {
    static getServiceInfo(target: any): ServiceInfo;
    static getServiceTokens(target: any): any[];
    static hasServiceParamTypes(target: any): boolean;
    static isValidService(target: any): boolean;
}
