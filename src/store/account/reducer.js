import { SET_LOGGED_IN, SET_USER_DATA } from "./constants";

const initialState = {
    isLoggedIn: false,
    userData: {
        userName: '',
        avatar: '',
        userId: ''
    }
}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state;
    }
}