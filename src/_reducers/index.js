import { combineReducers } from "redux";
import btn_reducer from './btn_reducer'
import change_reducer from "./change_reducer";

const rootReducer = combineReducers({
  btn_reducer,
  change_reducer,
});

export default rootReducer;