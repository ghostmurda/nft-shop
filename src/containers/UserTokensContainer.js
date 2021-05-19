import React, { useEffect, useState } from 'react';
import { getRinkebyData } from '../service/rinkebyApi';
import { UserTokensWrapper } from '../styles/UserPage.styles';
import MarketItemContainer from './MarketItemContainer';
import { timer } from '../service/helpers';
import { CircularProgress } from '@material-ui/core';

export default function UserTokensContainer({contracts}) {
    const [userTokens, setUserTokens] = useState();

    useEffect(() => {
        const tokens = [];
        
        const asyncFunc = async () => {
            for (let i = 0; i < contracts.length; i++) {
                const response = await getRinkebyData(contracts[i], 0);
                response && tokens.push({
                    token_uri: response.token_uri,
                    contract: contracts[i]
                });
                await timer(650);
            }
            setUserTokens(tokens);
        }
        asyncFunc();
        return () => asyncFunc;
    }, []);

    return (
        <>
            {!userTokens && <CircularProgress style={{marginTop: 32}} />}
            {userTokens && <UserTokensWrapper>
                {userTokens && userTokens.map((item, i) => <MarketItemContainer key={i} {...item} />)}
            </UserTokensWrapper>}
        </>
    );
}