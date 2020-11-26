import { combineReducers } from "redux"
import authReducer from './auth/authReducer';
import fileReducer from './file';

const rootReducer = combineReducers({
    token: authReducer,
    file: fileReducer,
})

export default rootReducer
