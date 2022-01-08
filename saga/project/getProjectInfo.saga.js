import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_STATUS } from "constants/api/apiConfigs";
import { constants } from "../../redux/project";
import { constants as loadingConstant } from "../../redux/loading";
import Notify from "./../../components/custom/Notify";
import projectApi from "../../apis/callApi/callProject";


function* doAction(action) {
  try {
    console.log("Test redux-saga: ", JSON.stringify(action.payload));
    yield put({ type: loadingConstant.SHOW_LOADING });
    const resData = yield call(projectApi.getInfoProject, action.payload);
    const { code, data, message } = resData;
    switch (code) {
      case REQUEST_STATUS.SUCCESS:
        yield put({ type: loadingConstant.HIDE_LOADING });
        yield put({
          type: constants.GET_PROJECT_INFO_SUCCESS,
          payload: { code, data, message },
        });
        break;
      default:
        yield put({ type: loadingConstant.HIDE_LOADING });
        Notify({content: message || 'Hệ thống xảy ra lỗi'})
        yield put({
          type: constants.GET_PROJECT_INFO_FAIL,
          payload: { data, message },
        });
        if (action.callback) {
          action.callback(false, data, code, message);
        }
    }
  } catch (error) {
    yield put({ type: loadingConstant.HIDE_LOADING });
    Notify({content: error || 'Hệ thống xảy ra lỗi'})
    yield put({ type: constants.GET_PROJECT_INFO_FAIL });
    if (action.callback) {
      action.callback(false, error);
    }
  }
}

export default function* getProjectInfo() {
  yield takeLatest(constants.GET_PROJECT_INFO, doAction);
}
