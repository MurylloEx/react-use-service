import 'reflect-metadata';
import { ServiceInfo } from './Types';

/**
 * A simple class with common methods used with services.
 */
 export class ServiceFacade {

  public static getServiceInfo(target: any): ServiceInfo {
    return Reflect.getMetadata('react:services', target) || {
      uuid: '00000000-0000-0000-0000-000000000000',
      isService: false
    };
  }

  public static getServiceTokens(target: any): any[] {
    return Reflect.getMetadata('design:paramtypes', target) || [];
  }

  public static isValidService(target: any): boolean {
    return this.getServiceInfo(target).isService;
  }

}