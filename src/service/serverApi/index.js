import * as axios from 'axios';
import { SERVER_URL } from '../../appConfig';

export const getMarketItems = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/tokens`);
        return response.data;
    } catch {
        return null;
    }
}

export const getTokenData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch {
        return null;
    }
}