import * as actions from './index';

describe('actions', () => {
  it('Should have a type of GET_BOOKLIST', () => {
    const allBooks = [
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
    ]

    const expectedAction = {
      type: 'GET_BOOKLIST',
      allBooks: allBooks
    }

    const result = actions.getNYTList(allBooks);

    expect(result).toEqual(expectedAction);
  })

  it('Should have a type of GET_LISTNAME', () => {
    const listName = 'Hardcover Fiction';

    const expectedAction = {
      type: 'GET_LISTNAME',
      listName: 'Hardcover Fiction'
    }

    const result = actions.getListName(listName);

    expect(result).toEqual(expectedAction);
  })

  it('Should have a type of ADD_TOREAD', () => {
    const toReadBook = {
        book_image: 'mockURL',
        title: 'mockTitle',
        author: 'mockAuthor',
        rank: '5'
    }

    const expectedAction = {
      type: 'ADD_TOREAD',
      toReadBook: toReadBook
    }

    const result = actions.addToRead(toReadBook);

    expect(result).toEqual(expectedAction);
  })

  it('Should have a type of ADD_TOHAVEREAD', () => {
    const haveReadBook = {
        book_image: 'mockURL',
        title: 'mockTitle',
        author: 'mockAuthor',
        rank: '5'
    }

    const expectedAction = {
      type: 'ADD_TOHAVEREAD',
      haveReadBook: haveReadBook
    }

    const result = actions.addToHaveRead(haveReadBook);

    expect(result).toEqual(expectedAction);
  })

  it('Should have a type of CREATE_USERGOAL', () => {
    const userGoal = 25;

    const expectedAction = {
      type: 'CREATE_USERGOAL',
      userGoal: 25
    }

    const result = actions.createUserGoal(userGoal);

    expect(result).toEqual(expectedAction);
  })
})
