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

export const postToken = async (contract, userId) => {
    try {
        const tokenData = await getRinkebyData(contract, 0);
        if (!tokenData) {
            throw new Error('Error');
        }
        if (!tokenData.valid) {
            throw new Error('Token not valid');
        }

        const tokenUri = tokenData.token_uri;

        const response = await axios.post(`${SERVER_URL}/tokens`, {
            uid: userId,
            contract,
            uri: tokenUri
        });

        return response;
    } catch (err) {
        console.error(err);
    }
}

export const postTokenToAccount = async (contract, userId) => {
    try {
        const response = await axios.post(`${SERVER_URL}/account`, {
            uid: userId,
            contract
        });

        return response;
    } catch (err) {
        console.error(err);
    }
}