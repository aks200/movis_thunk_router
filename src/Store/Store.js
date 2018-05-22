import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
//import rootReducer from "./rootReducer";
import ItemFetch from "../Reducer/ItemFetch";

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const Store = createStore(ItemFetch, composedEnhancers);

export default Store;
