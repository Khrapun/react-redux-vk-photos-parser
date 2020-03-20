import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  firebaseReducer
})