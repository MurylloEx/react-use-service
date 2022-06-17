import 'reflect-metadata';
/**
 * A simple class with common methods used with services.
 */
export class ServiceFacade {
    static getServiceInfo(target) {
        return Reflect.getMetadata('react:services', target) || {
            uuid: '00000000-0000-0000-0000-000000000000',
            isService: false
        };
    }
    static getServiceTokens(target) {
        return Reflect.getMetadata('design:paramtypes', target) || [];
    }
    static isValidService(target) {
        return this.getServiceInfo(target).isService;
    }
}
//# sourceMappingURL=Facade.js.map