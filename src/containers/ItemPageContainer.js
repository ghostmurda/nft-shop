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
import { Button, Card, CardMedia, CircularProgress, Paper, Snackbar, TextField, Typography } from '@material-ui/core';
import { getTokenDataByRinkeby } from '../service/rinkebyApi';
import { useLocation } from 'react-router';
import { getFirebaseTokenData, getUserData, postOffer } from '../service/serverApi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserId } from '../store/account/selectors';
import moment from "moment";

export default function ItemPageContainer() {
    const [data, setData] = useState(null);
    const [isError, setError] = useState(false);
    const [userId, setUserId] = useState();
    const [inputValue, setInputValue] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [offers, setOffers] = useState();

    const currentToken = useLocation();
    const { isLoggedIn, currentUserId } = useSelector(state => {
        return {
            isLoggedIn: getIsLoggedIn(state),
            currentUserId: getUserId(state),
        };
    });

    useEffect(() => {
        const asyncFunc = async () => {
            const tokenData = await getTokenDataByRinkeby(currentToken.pathname, 0);
            if (tokenData) {
                const firebaseTokenData = await getFirebaseTokenData(currentToken.pathname);
                const tokenAddedById = firebaseTokenData.added_by;

                const addedByUser = await getUserData(tokenAddedById);
                const addedByName = addedByUser.userName;

                setData({
                    image: tokenData.image,
                    name: tokenData.name,
                    price: tokenData.price,
                    desc: tokenData.description,
                    addedBy: addedByName ? addedByName : tokenAddedById
                });
                setOffers(firebaseTokenData.offers);
                setInputValue(tokenData.price);
                setUserId(tokenAddedById);
            } else {
                setError(true);
            }
        }
        asyncFunc();
        return () => asyncFunc;
    }, [isSuccess]);

    const inputHandler = (e) => {
        setInputValue(e.currentTarget.value);
    }

    const makeOffer = async () => {
        if (isLoggedIn) {
            const response = await postOffer(currentToken.pathname, {
                uid: currentUserId,
                date: new Date(),
                price: inputValue
            });

            response == 'Accepted' && setSuccess(true);
        }
    }

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
                        Добавил <Link to={`/user/${userId}`}>{data?.addedBy}</Link>
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
                        <div>
                            <TextField 
                                variant="outlined"
                                style={{maxWidth: 96}}
                                onChange={inputHandler}
                                value={inputValue}
                            />
                            <Button 
                                disabled={!isLoggedIn}
                                color="primary" 
                                variant="contained"
                                onClick={makeOffer}
                                style={{height: 56, marginLeft: 16}}
                            >
                                Сделать предложение
                            </Button>
                        </div>
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
                            {offers && offers.map((item, i) => {
                                return (
                                    <UserOfferPaperContainer key={i}>
                                        <Typography>{moment(item.date).format('L')}</Typography>
                                        <Typography>{item.uid}</Typography>
                                        <Typography>{item.price}</Typography>
                                    </UserOfferPaperContainer>
                                );
                            })}
                        </Paper>
                    </ItemPaperContainer>
                </Paper>
            </ItemCharacteristics></>}
            <Snackbar 
                open={isSuccess} 
                autoHideDuration={3000} 
                onClose={() => setSuccess(false)}
                message="Предложение сделано"
            />
        </ItemPageWrapper>
    );
}
