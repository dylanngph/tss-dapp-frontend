import { API_PROJECT, API_PROJECT_VERSION } from "../config";
import { callApi } from "./apiRequest";

const callApiProject = (method, apiURL, args) => {
  const params = {
    method,
    baseURL: API_PROJECT + API_PROJECT_VERSION,
    apiURL,
    payload: { ...args },
  };
  return callApi(params);
};

export default callApiProject;
