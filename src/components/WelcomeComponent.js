import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import React from 'react';
import {
    WelcomeTitle,
    Wrapper,
    WelcomeWrapper,
    ButtonsWrapper,
} from '../styles/Welcome.styles';
import testNftImg from '../media/test-nft.jpg';

export default function WelcomeComponent() {
    return (
        <Wrapper>
            <WelcomeWrapper>
                <div>
                    <WelcomeTitle>
                        Находите, коллекционируйте и продавайте NFT
                    </WelcomeTitle>
                    <ButtonsWrapper>
                        <Button variant="contained" color="primary">
                            Маркет
                        </Button>
                        <Button variant="outlined" color="primary">
                            Найти
                        </Button>
                    </ButtonsWrapper>
                </div>
                <Card style={{ maxWidth: '400px', borderRadius: 10 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="nft"
                            height="300"
                            image={testNftImg}
                            title="nft"
                        />
                        <CardContent>
                            <Typography>Test NFT</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </WelcomeWrapper>
        </Wrapper>
    );
}
