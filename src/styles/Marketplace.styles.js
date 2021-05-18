import styled from "styled-components";

export const MarketItemsWrapper = styled.div`
    width: calc(100% - 64px - 340px);
    padding: 16px 32px 32px 32px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
    width: 246px;
    padding: 16px;
    border-radius: 10;
`;

export const FilterWrapper = styled.div`
    width: 340px;
    position: sticky;
    top: 80px;
    z-index: 20;
    height: 600px;
    margin-top: 32px;
`;

export const MarketplaceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;