import { useQuery, useMutation } from 'react-query';
import { getPatience, createPatience } from './patientsApi';

interface patienceDataProps {
    nombre_paciente: string,
    apellido_paciente: string,
    fecha_nacimiento: string,
    fecha_registro: string,
    nombre_padre: string,
    nombre_madre: string,
    id_hospital_nacimiento: number,
    id_municipio: number,
    persona_refiere: string,
    sexo: string,
    telefono_contacto: string,
}

export const useGetPatients = () => useQuery('GetPatients', () => getPatience());

export const useCreatePatientMutation = () => useMutation('CreatePatient', (patienceData: patienceDataProps) => createPatience(patienceData));