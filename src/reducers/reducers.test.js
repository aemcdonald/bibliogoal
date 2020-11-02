import { books } from './books';
import { haveRead } from './haveRead';
import { list } from './list';
import { toRead } from './toRead';
import { userGoal } from './userGoal';

import * as actions from '../actions';
//import * as types from '../actions';


describe('books', () => {
  it('Should return the initial state', () => {
    const expected = [];
    const result = books(undefined, {});

    expect(result).toEqual(expected);
  })
})
