import { combineReducers } from "redux";
import * as constants from "./project.constant";
import { constants as loadingConstants } from "redux/loading";

const initialState = {
  responseGetProjectInfo: null,
  responsePostProjectApproval: null,
};


function projectStore(state = initialState, action) {
    switch (action.type) {
      case constants.GET_PROJECT_INFO:
        console.log("Dispatch no api: ", JSON.stringify(action?.payload));
        return {
          ...state,
          isLoadingGetProjectInfo: true,
        };
      case constants.GET_PROJECT_INFO_SUCCESS:
        return {
          ...state,
          isLoadingGetProjectInfo: false,
          responseGetProjectInfo: action?.payload,
        };
  
      case constants.GET_PROJECT_INFO_FAIL:
        return {
          ...state,
          isLoadingGetProjectInfo: false,
          responseGetProjectInfo: action?.payload,
        };
      case loadingConstants.ERROR_401:
      default:
        return state;
    }
  }
  
  export default combineReducers({ projectStore });