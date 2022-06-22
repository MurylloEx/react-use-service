import { AxiosResponse } from 'axios';
import { Service } from 'react-use-service';
import { Apod } from 'src/core/models';
import { HttpService } from './HttpService';

@Service()
export class NasaService {

  constructor(private readonly httpService: HttpService) {}

  getApod(): Promise<AxiosResponse<Apod>> {
    return this.httpService.get<Apod>('/planetary/apod');
  }

}
