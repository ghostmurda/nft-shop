import { Button, CircularProgress, Snackbar, TextField, Tooltip, MuiAlert } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { postToken, postTokenToAccount } from '../service/serverApi';
import { getIsLoggedIn, getUserId } from '../store/account/selectors';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';

export default function AddTokenContainer() {
    const [inputValue, setInputValue] = useState('');
    const [contract, setContract] = useState('');
    const [inProgress, setInProgress] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isError, setError] = useState(false);

    const history = useHistory();

    const inputHandler = (e) => {
        setInputValue(e.currentTarget.value);
    }

    const { isLoggedIn, userId } = useSelector(state => {
        return {
            isLoggedIn: getIsLoggedIn(state),
            userId: getUserId(state),
        };
    });

    const addToken = async () => {
        setInProgress(true);
        setContract(inputValue);

        if (inputValue && isLoggedIn) {
            const response = await postToken(inputValue, userId);
            
            if (response?.status == 202) {
                await postTokenToAccount(inputValue, userId);
                setSuccess(true);
                setInProgress(false);
            } else {
                setError(true);
                setInProgress(false);
            }
        }

        setInputValue('');
    };

    const onSuccessSnackbarClose = () => {
        setSuccess(false);
        history.push(`/${contract}`);
    }

    return (
        <>
            <Tooltip title="Адрес контракта">
                <TextField
                    id="outlined-basic"
                    label="Добавить токен"
                    variant="outlined"
                    onChange={inputHandler}
                    value={inputValue}
                />
            </Tooltip>
            {!inProgress && 
                <Button
                    disabled={!isLoggedIn}
                    variant="outlined"
                    color="primary"
                    style={{ height: '56px' }}
                    onClick={addToken}
                >
                    <AddIcon />
                </Button>
            }
            {inProgress && <CircularProgress />}
            <Snackbar 
                open={isSuccess} 
                autoHideDuration={3000} 
                onClose={onSuccessSnackbarClose}
                message="Токен успешно добавлен"
            />
            <Snackbar 
                open={isError} 
                autoHideDuration={3000} 
                onClose={() => setError(false)}
                message="Ошибка добаления"
            />
        </>
    );
}
