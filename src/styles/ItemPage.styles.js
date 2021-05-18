import styled from "styled-components";

export const ItemPageWrapper = styled.div`
    width: calc(100% - 256px);
    padding: 32px 128px 32px 128px;
    display: flex;
`;

export const ItemCharacteristics = styled.div`
    max-width: 700px;
    margin-left: 32px;
`;

export const ItemTitle = styled.div`
    font-size: 25px;
    margin-bottom: 32px;
`;

export const ItemPaperContainer = styled.div`
    padding: 16px;
    width: (100% - 32px);
`;

export const UserOfferPaperContainer = styled.div`
    padding: 16px;
    width: (100% - 32px);
    display: flex;
    justify-content: space-between;
`;

export const ErrorDisplay = styled.div`
    width: 100%;
    margin-top: 32px;
    font-size: 30px;
    text-align: center;
`;