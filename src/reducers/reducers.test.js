import { books } from './books';
import { haveRead } from './haveRead';
import { listName } from './list';
import { toRead } from './toRead';
import { userGoal } from './userGoal';

// import * as actions from '../actions';
import * as types from '../actions';


describe('books', () => {
  it('Should return the initial state', () => {
    const expected = [];
    const result = books(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return state with a booklist', () => {
    const expected = [
      {
        book_image: 'mockURL',
        title: 'mockTitle1',
        author: 'mockAuthor1',
        rank: 5
      },
      {
        book_image: 'mockURL',
        title: 'mockTitle2',
        author: 'mockAuthor2',
        rank: 6
      }
    ];
    const result = books([], {
      type: 'GET_BOOKLIST',
      allBooks: expected
    })
    expect(result).toEqual(expected);
  })
})

describe('listName', () => {
  it('Should return initial state', () => {
    const expected = 'Hardcover Fiction';
    const result = listName(undefined, 'Hardcover Fiction');

    expect(result).toEqual(expected);
  })
})
