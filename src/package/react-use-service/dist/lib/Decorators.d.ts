import 'reflect-metadata';
import { Instantiable } from './Types';
/**
 * The Service decorator that should be used in services
 */
export declare const Service: () => (target: Instantiable<any, any>) => void;
