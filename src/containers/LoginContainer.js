import React from "react";
import { auth, firebase } from "../firebase";
import { Avatar, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import accountActions from "../store/account/actions";
import { getAvatar, getIsLoggedIn, getName } from "../store/account/selectors";

export default function LoginContainer() {
    const dispatch = useDispatch();
    const {isLoggedIn, userName, avatar} = useSelector(state => {
        return {
            isLoggedIn: getIsLoggedIn(state),
            userName: getName(state),
            avatar: getAvatar(state)
        }
    });

    async function googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        await auth.signInWithPopup(provider).then(
            async (result) => {
                const data = result.user;

                dispatch(accountActions.setLoggedIn());
                dispatch(accountActions.addUserData({
                    userName: data.displayName,
                    avatar: data.photoURL,
                    userId: data.uid
                }));

                const token = await auth?.currentUser?.getIdToken(true);
                token && localStorage.setItem("@token", token);
            },
            function (error) {
                console.log(error);
            }
        );
    }

    return (
        <div>
            {!isLoggedIn && <Button onClick={googleLogin} variant="contained" color="primary">
                Войти
            </Button>}
            {isLoggedIn && <Avatar alt={userName} src={avatar} style={{border: '1px solid gray'}}/>}
        </div>
    );
}