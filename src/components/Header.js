import React, { useState } from 'react';
import {
    HeaderWrapper,
    HeaderTitle,
    LogoWrapper,
    SearchWrapper,
    AccountWrapper,
} from '../styles/Header.styles';
import logo from '../media/logo.png';
import { Button, Fab, Menu, MenuItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleAccountClick = e => {
        setMenuAnchor(e.currentTarget);
        setIsMenu(!isMenu);
    };

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <img src={logo} alt="logo" width="48" />
                <HeaderTitle>
                    <Link to="/">NFT Shop</Link>
                </HeaderTitle>
            </LogoWrapper>
            <SearchWrapper>
                <TextField
                    id="outlined-basic"
                    label="Найти токен"
                    variant="outlined"
                />
                <Button
                    variant="outlined"
                    color="primary"
                    style={{ height: '56px' }}
                >
                    <SearchIcon />
                </Button>
            </SearchWrapper>
            <AccountWrapper>
                <Fab color="primary" onClick={handleAccountClick}>
                    <AccountCircleIcon />
                </Fab>
            </AccountWrapper>
            <Menu
                open={isMenu}
                anchorEl={menuAnchor}
                onClose={() => setIsMenu(false)}
            >
                <MenuItem>Google sign in</MenuItem>
            </Menu>
        </HeaderWrapper>
    );
}
