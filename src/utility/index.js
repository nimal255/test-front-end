import jwtDecode from "jwt-decode";
const TOKEN_KEY = "jwtToken";

export const login = () => {
    localStorage.setItem(TOKEN_KEY, "TestLogin");
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        let token = localStorage.getItem(TOKEN_KEY);
        let decoded = jwtDecode(token);
        if (decoded) {
            const now = Date.now().valueOf() / 1000;
            if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    return false;
};
