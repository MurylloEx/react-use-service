import 'reflect-metadata';
import { v4 } from 'uuid';
/**
 * The Service decorator that should be used in services
 */
export const Service = () => {
    return (target) => {
        Reflect.defineMetadata('react:services', {
            uuid: v4(),
            isService: true
        }, target.prototype);
    };
};
//# sourceMappingURL=Decorators.js.map