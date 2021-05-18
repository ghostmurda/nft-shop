export const getAvatar = (state) => state.accountReducer.userData.avatar;

export const getName = (state) => state.accountReducer.userData.userName;

export const getIsLoggedIn = (state) => state.accountReducer.isLoggedIn;

export const getUserId = (state) => state.accountReducer.userData.userId;