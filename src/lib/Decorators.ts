import 'reflect-metadata';
import { v4 } from 'uuid';
import { Instantiable } from './Types';

/**
 * The Service decorator that need be used in services
 */
 export const Service = () => {
  return (target: Instantiable<any, any>) => {
    Reflect.defineMetadata('react:services', {
      uuid: v4(),
      isService: true
    }, target.prototype);
  }
};