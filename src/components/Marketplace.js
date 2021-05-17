import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react';
import { FilterWrapper, MarketItemsWrapper, MarketplaceWrapper } from '../styles/Marketplace.styles';
import MarketItem from './MarketItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Marketplace() {
    return (
        <MarketplaceWrapper>
            <FilterWrapper>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Фильтрация по цене</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Детали</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Фильтрация по коллекциям</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Детали</Typography>
                    </AccordionDetails>
                </Accordion>
            </FilterWrapper>
            <MarketItemsWrapper>
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
            </MarketItemsWrapper>
        </MarketplaceWrapper>
    );
}
