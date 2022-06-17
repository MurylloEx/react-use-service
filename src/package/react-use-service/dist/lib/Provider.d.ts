import { IServiceContainer } from './Container';
import { FunctionComponent } from 'react';
export declare const ServiceContext: import("react").Context<IServiceContainer>;
export interface ServiceProviderProps {
    container?: IServiceContainer;
    children?: React.ReactNode;
}
/**
 * Service provider that holds the Service Container used to store the service references.
 */
export declare const ServiceProvider: FunctionComponent<ServiceProviderProps>;
