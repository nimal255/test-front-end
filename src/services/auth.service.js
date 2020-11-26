import { performAuthRequest } from "./api-handler";
import { URLS } from "../utility/urls";

export default () => {
  const { LOGIN_USER, REGISTER_USER } = URLS;
  return {
    userLogin: (body = {}, method = "post") =>
      performAuthRequest(method ? method : "post", LOGIN_USER, body),
    userRegister: (body = {}, method = "post") =>
      performAuthRequest(method ? method : "post", REGISTER_USER, body),
  };
};
