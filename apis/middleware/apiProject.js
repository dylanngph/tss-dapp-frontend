import { API_PROJECT } from "../config";
import { callApi } from "./apiRequest";

const callApiProject = (method, apiURL, args) => {
  const params = {
    method,
    baseURL: API_PROJECT,
    apiURL,
    payload: { ...args },
  };
  return callApi(params);
};

export default callApiProject;
