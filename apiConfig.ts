import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const api = axios.create({
    baseURL: publicRuntimeConfig.baseURL,
    timeout: 60000,
    headers: { 'Content-Type': 'application/json' },
})

export default api;