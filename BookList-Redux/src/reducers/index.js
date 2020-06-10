import { combineReducers } from 'redux';
import BookReducer from "./reducer_books";
import ActiveBookReducer from "./reducer_activebook";

const rootReducer = combineReducers({
  books: BookReducer,
  activebook: ActiveBookReducer
});

export default rootReducer;

