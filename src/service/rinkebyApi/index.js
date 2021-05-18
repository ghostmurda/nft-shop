import * as axios from 'axios';
import { getTokenData } from '../serverApi';

export const getTokenDataByRinkeby = async (contractAdress, tokenId) => {
    try {
        const response = await axios.get(`https://rinkeby-api.opensea.io/asset${contractAdress}/${tokenId}/validate`);
        const tokenData = await getTokenData(response.data.token_uri);
        return tokenData;
    } catch {
        return null;
    }
}