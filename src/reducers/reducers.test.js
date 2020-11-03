import { books } from './books';
import { haveReadList } from './haveRead';
import { listName } from './list';
import { toRead } from './toRead';
import { setUserGoal } from './userGoal';

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

  it('Should return state with a listname', () => {
    const expected = 'Celebrities'
    const result = listName('Hardcover Fiction', {
      type: 'GET_LISTNAME',
      listName: expected
    })
    expect(result).toEqual(expected);
  })
})

describe('userGoal', () => {
  it('Should return initial state', () => {
    const expected = '';
    const result = setUserGoal(undefined, '');
    expect(result).toEqual(expected);
  })

  it('Should return state with a userGoal', () => {
    const expected = '25';
    const result = setUserGoal('10', {
      type: 'CREATE_USERGOAL',
      userGoal: expected
    })
    expect(result).toEqual(expected);
  })
})

describe('haveRead', () => {
  it('Should return initial state', () => {
    const expected = [];
    const result = haveReadList(undefined, {})
    expect(result).toEqual(expected);
  })

  it('Should return state with an array of books', () => {
    const expected = {
        book_image: 'mockURL',
        title: 'mockTitle1',
        author: 'mockAuthor1',
        rank: 5
      };
    const result = haveReadList([], {
      type: 'ADD_TOHAVEREAD',
      haveReadBook: expected
    })
    expect(result).toEqual([expected]);
  })
})


//
