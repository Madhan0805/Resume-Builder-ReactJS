import { combineReducers } from "redux";
import { resumeReducer } from "./ResumeReducer";

const reducer = combineReducers({
  Resume: resumeReducer,
});

export default reducer;
