import { Service } from 'react-use-service';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

@Service()
export class AxiosService {

  private builderConfig: AxiosRequestConfig<any> = {};

  public baseUrl(url: string): AxiosService {
    this.builderConfig.baseURL = url;
    return this;
  }

  public header(key: string, value: string): AxiosService {
    this.builderConfig.headers = {
      ...this.builderConfig.headers,
      [key]: value
    };
    return this;
  }

  public param(key: string, value: string): AxiosService {
    this.builderConfig.params = {
      ...this.builderConfig.params,
      [key]: value
    };
    return this;
  }

  public destroy(): AxiosService {
    this.builderConfig = {};
    return this;
  }

  public build(config: AxiosRequestConfig<any> = {}): AxiosInstance {
    return axios.create(
      Object.assign(this.builderConfig, config));
  }

}
