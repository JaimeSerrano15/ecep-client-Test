import api from "../../apiConfig";

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

export const getPatience = async () => {
    const res = await api.get('/patients');
    return res.data;
}

export const createPatience = async (patienceData: patienceDataProps) => {
    const res = await api.post('/patients', patienceData);
}