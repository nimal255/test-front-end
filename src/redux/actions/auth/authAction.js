import { LOGIN_DETAILS, REGISTER_DETAILS } from "../../type";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const SET_CURRENT_USER = "LOGIN_DETAILS";

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

const login = (data) => {
    return (dispatch) => {
        const token = data.token;

        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token), token));
    };
};

export function setCurrentUser(user, token) {
    return {
        type: LOGIN_DETAILS,
        user: user,
        payload: token,
    };
}

const deauthenticate = () => {
    return (dispatch) => {
        localStorage.removeItem("jwtToken");
        dispatch({ type: LOGIN_DETAILS, user: {}, payload: null });
    };
};

const reauthenticate = () => {
    return (dispatch) => {
        const token = localStorage.getItem("jwtToken");

        if (token !== null) {
            dispatch(setCurrentUser(jwtDecode(token), token));
        } else {
            dispatch({
                type: LOGIN_DETAILS,
                user: {},
                payload: null,
            });
        }
    };
};

const registerDetails = (data) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_DETAILS, payload: data });
    };
};


export default {
    login,
    deauthenticate,
    reauthenticate,
    registerDetails,
};
