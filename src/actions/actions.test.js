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
})
