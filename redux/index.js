import { combineReducers } from "redux";
import projectReducers from "redux/project/project.reducer";
const rootReducers = combineReducers({
  projectReducers,
});

export default rootReducers;
