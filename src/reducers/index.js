import { combineReducers } from 'redux';
import { books } from './books';
//will import all reducers here as their own import line


const allReducers = combineReducers({
  //w/e name you want: import name
  books
})

export default allReducers;
