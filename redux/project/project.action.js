import * as constants from "./project.constant";

/** Get Project Info */
export const getProjectInfo = (payload, callback) => ({
  type: constants.GET_PROJECT_INFO,
  payload,
  callback,
});

export const getProjectInfoSuccess = (payload, callback) => ({
  type: constants.GET_PROJECT_INFO_SUCCESS,
  payload,
  callback,
});

export const getProjectInfoFail = (payload, callback) => ({
  type: constants.GET_PROJECT_INFO_FAIL,
  payload,
  callback,
});