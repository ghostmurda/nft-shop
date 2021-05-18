import React from 'react';
import testNftImg from '../media/test-nft-2.jpg';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { ItemWrapper } from '../styles/Marketplace.styles';

export default function MarketItem() {
    return (
        <ItemWrapper>
            <Card style={{borderRadius: 10}} elevation={2}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="nft"
                        height="300"
                        image={testNftImg}
                        title="nft"
                    />
                    <CardContent>
                        <Typography gutterBottom>Test NFT тестовый</Typography>
                        <Typography variant="body2" color="textSecondary">12 ETH</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ItemWrapper>
    );
}
