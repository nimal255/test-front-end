import { combineReducers } from "redux";
import { fileData } from "./reducer.file";


const fileReducer = combineReducers({
  fileData
})

export default fileReducer;
