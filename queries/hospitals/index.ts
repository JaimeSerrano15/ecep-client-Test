import { useQuery } from 'react-query';
import { getHospitals } from './hospitalsApi';

export const useGetHospitals = () => useQuery('GetHospitals', () => getHospitals());