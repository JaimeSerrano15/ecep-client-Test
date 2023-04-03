import api from "../../apiConfig";

export const getHospitals = async () => {
    const res = await api.get('/hospitals');
    return res.data;
}