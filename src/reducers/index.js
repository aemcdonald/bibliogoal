import { combineReducers } from 'redux';
import { books } from './books';
import { listName } from './list';
import { toReadList } from './toRead';
import { haveReadList } from './haveRead';
import { setUserGoal } from './userGoal';

const allReducers = combineReducers({
  books,
  listName,
  toReadList,
  haveReadList,
  setUserGoal
})

export default allReducers;
