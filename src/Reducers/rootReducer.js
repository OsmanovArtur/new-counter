import { combineReducers } from "redux";
import intermadiateResultReducer from "../Reducers/intermediateResultReducer";
import AddReducer from "../Reducers/AddReducer";

const rootReducers = combineReducers({
  AddReducer,
  intermadiateResultReducer,
});
export default rootReducers;
