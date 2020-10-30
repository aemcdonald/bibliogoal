import { combineReducers } from 'redux';
import { books } from './books';
import { listName } from './list';

const allReducers = combineReducers({
  books,
  listName
})

export default allReducers;
