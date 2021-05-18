import React, { useEffect, useState } from 'react';
import Marketplace from '../components/Marketplace';
import { getMarketItems } from '../service/serverApi';

export default function MarketplaceContainer() {
    const [marketItems, setMarketItems] = useState();

    useEffect(() => {
        const asyncFunc = async () => {
            const tokens = await getMarketItems();
            setMarketItems(tokens);
        }
        asyncFunc();
        return () => asyncFunc;
    }, []);

    return (
        <Marketplace marketItems={marketItems} />
    );
}