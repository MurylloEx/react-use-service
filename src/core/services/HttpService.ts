import { AxiosInstance } from 'axios';
import { Service } from 'react-use-service';
import { AxiosService } from './AxiosService';

@Service()
export class HttpService {

  private readonly NASA_API_BASE_URL = 'https://api.nasa.gov';
  private readonly NASA_API_TOKEN_KEY = 'api_key';
  private readonly NASA_API_TOKEN_VALUE = 'bDECNvTefflJlWmCratfnea8mToHgGDZtFByXmcY';

  private httpClient!: AxiosInstance;

  constructor(private readonly axiosService: AxiosService) {
    this.httpClient = this.axiosService
      .baseUrl(this.NASA_API_BASE_URL)
      .param(this.NASA_API_TOKEN_KEY, this.NASA_API_TOKEN_VALUE)
      .build();
  }

  public get<T = any>(url: string, params?: any) {
    return this.httpClient.get<T>(url, { params });
  }

  public post<T = any, D = any>(url: string, params?: any, data?: D) {
    return this.httpClient.post<T>(url, data, { params });
  }

  public put<T = any, D = any>(url: string, params?: any, data?: D) {
    return this.httpClient.post<T>(url, data, { params });
  }

  public delete<T = any>(url: string, params?: any) {
    return this.httpClient.delete<T>(url, { params });
  }

}
