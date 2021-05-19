import { Avatar, CircularProgress, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getUserData } from '../service/serverApi';
import { ErrorDisplay, LoadingWrapper } from '../styles/ItemPage.styles';
import { UserPageWrapper, UserTokensWrapper } from '../styles/UserPage.styles';
import MarketItemContainer from './MarketItemContainer';
import UserTokensContainer from './UserTokensContainer';

function UserPageContainer(props) {
    const [data, setData] = useState(null);
    const [isError, setError] = useState(false);
    const userId = props.match.params.userId;

    useEffect(() => {
        const asyncFunc = async () => {
            const userData = await getUserData(userId);
            userData ? setData(userData) : setError(true);
        }
        asyncFunc();
        return () => asyncFunc;
    }, []);
    
    return (
        <UserPageWrapper>
            {isError && 
                <ErrorDisplay>Упс, возникла ошибка!</ErrorDisplay>
            }
            {!isError && !data && 
                <LoadingWrapper>
                    <CircularProgress />
                </LoadingWrapper>
            }
            {!isError && data &&
                <>
                    <Avatar 
                        alt={data?.userName} 
                        src={data?.avatar} 
                        style={{
                            border: '1px solid gray', 
                            width: 100, 
                            height: 100,
                            marginBottom: 16
                        }} 
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                        {data?.userName}
                    </Typography>
                    <Typography variant="body2" gutterBottom color="textSecondary">
                        {userId}
                    </Typography>
                    <UserTokensContainer contracts={data?.tokens}/>
                </>
            }
        </UserPageWrapper>
    );
}

export default withRouter(UserPageContainer);