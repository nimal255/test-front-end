import { LOGIN_DETAILS, REGISTER_DETAILS } from "../../type";

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {},
    token: null,
    registerData: {},
};


export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOGIN_DETAILS:
            return {
                // turn an empty object into false or an object with keys to be true
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user,
                token: action.payload,
            };
        case REGISTER_DETAILS:
            return {
                registerData: action.payload,
            };
        default:
            return state;
    }
};
