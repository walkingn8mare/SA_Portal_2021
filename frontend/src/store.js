import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./reducers/auth";
import announcements from "./reducers/announcements";
import about from "./reducers/about";
import categories from "./reducers/category";

const reducer = combineReducers({
  auth,
  announcements,
  about,
  categories,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
