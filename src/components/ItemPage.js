import React, { useEffect, useState } from 'react';
import {
    ErrorDisplay,
    ItemCharacteristics,
    ItemPageWrapper,
    ItemPaperContainer,
    ItemTitle,
    UserOfferPaperContainer,
} from '../styles/ItemPage.styles';
import { Button, Card, CardMedia, Paper, Typography } from '@material-ui/core';
import { getTokenDataByRinkeby } from '../service/rinkebyApi';
import { useLocation } from 'react-router';

export default function ItemPage() {
    const [image, setImage] = useState();
    const [name, setName] = useState('Token name');
    const [price, setPrice] = useState('12 ETH');
    const [isError, setError] = useState(false);

    const currentToken = useLocation();

    useEffect(() => {
        const asyncFunc = async () => {
            const tokenData = await getTokenDataByRinkeby(currentToken.pathname, 0);
            if (tokenData) {
                setImage(tokenData.image);
                setName(tokenData.name);
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
                <ErrorDisplay>Упс, такой страницы не существует!</ErrorDisplay>
            }
            {!isError && <><Card style={{ width: 500 }} elevation={3}>
                <CardMedia
                    component="img"
                    alt="nft"
                    height="600"
                    image={image}
                    title="nft"
                />
            </Card>
            <ItemCharacteristics>
                <ItemTitle>
                    {name}
                </ItemTitle>
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
                            {price}
                        </Typography>
                        <Button color="primary" variant="contained">
                            Сделать предложение
                        </Button>
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
