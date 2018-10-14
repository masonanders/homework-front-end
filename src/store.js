import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/root"
import logger from "redux-logger";

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(logger));

export default configureStore;