import { combineReducers } from 'redux';
import { books } from './books';
import { listName } from './list';
import { toReadList } from './toRead';

const allReducers = combineReducers({
  books,
  listName,
  toReadList
})

export default allReducers;
