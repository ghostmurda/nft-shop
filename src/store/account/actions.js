import { SET_LOGGED_IN, SET_USER_DATA } from "./constants"

const accountActions = {
    addUserData: (userData) => {
        return {
            type: SET_USER_DATA,
            payload: userData
        }
    },

    setLoggedIn: () => {
        return {
            type: SET_LOGGED_IN
        }
    }
}

export default accountActions;