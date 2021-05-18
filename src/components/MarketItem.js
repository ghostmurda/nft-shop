import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { ItemWrapper } from '../styles/Marketplace.styles';

export default function MarketItem({image, name, openItemPage}) {
    return (
        <ItemWrapper onClick={openItemPage}>
            <Card style={{borderRadius: 10}} elevation={2}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="nft"
                        height="300"
                        image={image}
                        title="nft"
                    />
                    <CardContent>
                        <Typography gutterBottom>{name}</Typography>
                        <Typography variant="body2" color="textSecondary">12 ETH</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ItemWrapper>
    );
}
