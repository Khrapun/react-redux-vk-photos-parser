import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "../utils/firebase";

// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(createStore);

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))