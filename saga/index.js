import { fork, all } from "redux-saga/effects";
import Project from "./../saga/project";

function* rootSagas() {
  yield all([
    /* Users saga */
    ...Project.map((saga) => fork(saga)),
  ]);
}

export default rootSagas;
