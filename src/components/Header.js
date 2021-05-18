import React from 'react';
import {
    HeaderWrapper,
    HeaderTitle,
    LogoWrapper,
    SearchWrapper,
    AccountWrapper,
} from '../styles/Header.styles';
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import AddTokenContainer from '../containers/AddTokenContainer';

export default function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <img src={logo} alt="logo" width="48" />
                <HeaderTitle>
                    <Link to="/">NFT Shop</Link>
                </HeaderTitle>
            </LogoWrapper>
            <SearchWrapper>
                <AddTokenContainer />
            </SearchWrapper>
            <AccountWrapper>
                <LoginContainer />
            </AccountWrapper>
        </HeaderWrapper>
    );
}
