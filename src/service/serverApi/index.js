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

export const getTokenDataAddedBy = async (contract) => {
    try {
        const response = await axios.get(`${SERVER_URL}/tokens?contract=${contract}`)
        return response.data.added_by;
    } catch (err) {
        console.error(err);
    }
}

export const postUserData = async (avatar, uid, userName) => {
    try {
        const response = axios.post(`${SERVER_URL}/account/userData`, {
            avatar,
            userName,
            uid
        });

        return response;
    } catch (err) {
        console.error(err);
    }
}

export const getUserData = async (uid) => {
    try {
        const response = await axios.get(`${SERVER_URL}/account?uid=${uid}`)
        if (response.data.status === 404 || response.data.status === 400) {
            throw new Error('Error');
        }
        return response.data;
    } catch (err) {
        console.error(err);
    }
}