import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: 0px 5px 32px -10px rgba(34, 60, 80, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background: white;
    top: 0;
    z-index: 10;
`;

export const HeaderTitle = styled.span`
    font-size: 25px;
    & a{
        text-decoration: none;
        color: black;
    }
`;

export const LogoWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
`;

export const SearchWrapper = styled.div`
    width: 286px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AccountWrapper = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
