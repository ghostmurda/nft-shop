import * as axios from 'axios';
import { getTokenData } from '../serverApi';

export const getTokenDataByRinkeby = async (contractAdress, tokenId) => {
    try {
        const response = await axios.get(`https://rinkeby-api.opensea.io/asset${contractAdress}/${tokenId}/validate`);
        if (!response.data.valid) {
            throw new Error('Token not valid');
        }
        const tokenData = await getTokenData(response.data.token_uri);
        return tokenData;
    } catch (err){
        console.error(err);
        return null;
    }
}

export const getRinkebyData = async (contractAdress, tokenId) => {
    try {
        const response = await axios.get(`https://rinkeby-api.opensea.io/asset/${contractAdress}/${tokenId}/validate`);
        if (!response.data.valid) {
            throw new Error('Token not valid');
        }
        return response.data;
    } catch (err) {
        console.error(err);
    }
}