import * as axios from 'axios';
import { SERVER_URL } from '../../appConfig';
import { getRinkebyData } from '../rinkebyApi';

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

export const postToken = async (contract) => {
    try {
        const tokenData = await getRinkebyData(contract, 0);
        const tokenUri = tokenData.token_uri;
        await axios.post(`${SERVER_URL}/tokens`, {
            name: 'ghostmurda',
            contract,
            uri: tokenUri
        });
    } catch (err) {
        console.error(err);
    }
}