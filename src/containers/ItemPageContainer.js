import React, { useEffect, useState } from 'react';
import {
    ErrorDisplay,
    ItemCharacteristics,
    ItemPageWrapper,
    ItemPaperContainer,
    ItemTitle,
    ItemTitleWrapper,
    LoadingWrapper,
    UserOfferPaperContainer,
} from '../styles/ItemPage.styles';
import { Button, Card, CardMedia, CircularProgress, Paper, Typography } from '@material-ui/core';
import { getTokenDataByRinkeby } from '../service/rinkebyApi';
import { useLocation } from 'react-router';
import { getTokenDataAddedBy, getUserData } from '../service/serverApi';

export default function ItemPageContainer() {
    const [data, setData] = useState(null);
    const [isError, setError] = useState(false);
    const [userId, setUserId] = useState();

    const currentToken = useLocation();

    useEffect(() => {
        const asyncFunc = async () => {
            const tokenData = await getTokenDataByRinkeby(currentToken.pathname, 0);
            if (tokenData) {
                const tokenAddedById = await getTokenDataAddedBy(currentToken.pathname);
                const addedByUser = await getUserData(tokenAddedById);
                const addedByName = addedByUser.userName;

                setData({
                    image: tokenData.image,
                    name: tokenData.name,
                    price: tokenData.price,
                    desc: tokenData.description,
                    addedBy: addedByName ? addedByName : tokenAddedById
                });

                setUserId(tokenAddedById);
            } else {
                setError(true);
            }
        }
        asyncFunc();
        return () => asyncFunc;
    }, []);

    return (
        <ItemPageWrapper>
            {isError && 
                <ErrorDisplay>Упс, возникла ошибка!</ErrorDisplay>
            }
            {!isError && !data && 
                <LoadingWrapper>
                    <CircularProgress />
                </LoadingWrapper>
            }
            {!isError && data && 
            <><Card style={{ width: 500 }} elevation={3}>
                <CardMedia
                    component="img"
                    alt="nft"
                    height="600"
                    image={data?.image}
                    title="nft"
                />
            </Card>
            <ItemCharacteristics>
                <ItemTitleWrapper>
                    <ItemTitle>
                        {data?.name}
                    </ItemTitle>
                    <Typography color="textSecondary">
                        Добавил {data?.addedBy}
                    </Typography>
                </ItemTitleWrapper>
                <Paper
                    variant="outlined"
                    style={{ width: 700, marginBottom: 32 }}
                >
                    <ItemPaperContainer>
                        <Typography
                            variant="body2"
                            gutterBottom
                            color="textSecondary"
                        >
                            Текущая цена
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {data?.price}
                        </Typography>
                        <Button color="primary" variant="contained">
                            Сделать предложение
                        </Button>
                    </ItemPaperContainer>
                </Paper>
                <Paper
                    variant="outlined"
                    style={{ width: 700, marginBottom: 32 }}
                >
                    <ItemPaperContainer>
                        <Typography
                            variant="body2"
                            gutterBottom
                            color="textSecondary"
                        >
                            Описание
                        </Typography>
                        <Typography gutterBottom>
                            {data?.desc}
                        </Typography>
                    </ItemPaperContainer>
                </Paper>
                <Paper
                    variant="outlined"
                    style={{ width: 700, height: 364, overflow: 'auto' }}
                >
                    <ItemPaperContainer>
                        <Typography
                            variant="body2"
                            gutterBottom
                            color="textSecondary"
                        >
                            Предложения
                        </Typography>
                        <Paper
                            variant="outlined"
                            style={{ width: 668, marginTop: 16 }}
                        >
                            <UserOfferPaperContainer>
                                <Typography>18.05.2021</Typography>
                                <Typography>User name</Typography>
                                <Typography>12 ETH</Typography>
                            </UserOfferPaperContainer>
                        </Paper>
                    </ItemPaperContainer>
                </Paper>
            </ItemCharacteristics></>}
        </ItemPageWrapper>
    );
}
