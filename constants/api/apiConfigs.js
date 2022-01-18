import { API_PROJECT } from 'apis/config/index';

export const REQUEST_STATUS = {
    SUCCESS: 1000,
    REQUEST_FAIL: 1001,
    SYSTEM_ERROR: 500,
    INVALID_PARAMS: 400,
    INVALID_TOKEN: 401,
    REQUIRED_UPDATE: 402,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    UNKNOWN_ERROR: 2000,
}

export const API_APP = {
    PROJECT_ALL: `${API_PROJECT}/project/active/all`,
    PROJECT_DETAIL: `${API_PROJECT}/project?projectId=`,
}