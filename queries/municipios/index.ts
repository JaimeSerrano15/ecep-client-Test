import { useQuery } from 'react-query';
import { getMunicipios } from './municipiosApi';

export const useGetMunicipios = () => useQuery('GetMunicipios', () => getMunicipios());