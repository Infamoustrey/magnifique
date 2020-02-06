import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { interfaceReducer } from "./interface/reducers";

const rootReducer = combineReducers({
  interface: interfaceReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(
  rootReducer,
  composeWithDevTools(middleWareEnhancer)
);
