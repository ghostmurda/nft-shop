import React from 'react';
import {
    ItemCharacteristics,
    ItemPageWrapper,
    ItemPaperContainer,
    ItemTitle,
    UserOfferPaperContainer
} from '../styles/ItemPage.styles';
import testNftImg from '../media/test-nft-2.jpg';
import { Button, Card, CardMedia, Paper, Typography } from '@material-ui/core';

export default function ItemPage() {
    return (
        <ItemPageWrapper>
            <Card style={{ maxWidth: 500 }} elevation={3}>
                <CardMedia
                    component="img"
                    alt="nft"
                    height="600"
                    image={testNftImg}
                    title="nft"
                />
            </Card>
            <ItemCharacteristics>
                <ItemTitle>NFT токен</ItemTitle>
                <Paper variant="outlined" style={{ width: 700, marginBottom: 32 }}>
                    <ItemPaperContainer>
                        <Typography variant="body2" gutterBottom color="textSecondary">
                            Текущая цена
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>12 ETH</Typography>
                        <Button color="primary" variant="contained">Сделать предложение</Button>
                    </ItemPaperContainer>
                </Paper>
                <Paper variant="outlined" style={{ width: 700, height: 364, overflow: 'auto' }}>
                    <ItemPaperContainer>
                        <Typography variant="body2" gutterBottom color="textSecondary">
                            Предложения
                        </Typography>
                        <Paper variant="outlined" style={{width: 668, marginTop: 16}}>
                            <UserOfferPaperContainer>
                                <Typography>
                                    18.05.2021
                                </Typography>
                                <Typography>
                                    User name
                                </Typography>
                                <Typography>
                                    12 ETH
                                </Typography>
                            </UserOfferPaperContainer>
                        </Paper>
                    </ItemPaperContainer>
                </Paper>
            </ItemCharacteristics>
        </ItemPageWrapper>
    );
}
