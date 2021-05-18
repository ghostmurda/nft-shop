import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react';
import { FilterWrapper, MarketItemsWrapper, MarketplaceWrapper } from '../styles/Marketplace.styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MarketItemContainer from '../containers/MarketItemContainer';

export default function Marketplace({marketItems}) {
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
                {marketItems && marketItems.map((item, i) => <MarketItemContainer key={i} {...item} />)}
            </MarketItemsWrapper>
        </MarketplaceWrapper>
    );
}
