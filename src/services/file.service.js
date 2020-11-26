import { performRequest } from "./api-handler";
import { URLS } from "../utility/urls";

export default () => {
  const { FILE_UPLOAD,FILE_LIST } = URLS;
  return {
    getFileList: (body = {}, method = "get") =>
      performRequest(method ? method : "post", FILE_LIST, body),
    uploadFile: (body = {}, method = "post") =>
      performRequest(method ? method : "post", FILE_UPLOAD, body),
  };
};
