import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MarketItem from '../components/MarketItem';
import { getTokenData } from '../service/serverApi';

export default function MarketItemContainer(props) {
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [isValid, setValid] = useState(false);

    const history = useHistory();

    const openItemPage = () => {
        history.push(`/${props.contract}`);
    }

    useEffect(() => {
        const asyncFunc = async () => {
            const tokenData = await getTokenData(props.token_uri);
            if (tokenData) {
                setValid(true);
                setImage(tokenData.image);
                setName(tokenData.name);
            }
        }
        asyncFunc();
        return () => asyncFunc;
    }, []);

    return (
        <>
            {isValid && <MarketItem image={image} name={name} openItemPage={openItemPage} />}
        </>
    );
}