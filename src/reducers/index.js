import { combineReducers } from 'redux';
import { books } from './books';
import { listName } from './list';
import { toReadList } from './toRead';
import { haveReadList } from './haveRead';

const allReducers = combineReducers({
  books,
  listName,
  toReadList,
  haveReadList
})

export default allReducers;
