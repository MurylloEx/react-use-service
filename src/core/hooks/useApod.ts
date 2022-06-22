import { AxiosResponse } from 'axios';
import { useService } from 'react-use-service';
import { useQuery, UseQueryResult } from 'react-query';
import { NasaService } from 'src/core/services';
import { Apod } from 'src/core/models';

export function useApod(): UseQueryResult<AxiosResponse<Apod>> {
  const nasaService = useService<NasaService>(NasaService);
  return useQuery('getApod', () => nasaService.getApod());
}
