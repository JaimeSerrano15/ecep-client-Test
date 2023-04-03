import api from "../../apiConfig";

export const getMunicipios = async () => {
    const res = await api.get('/municipios');
    return res.data;
}