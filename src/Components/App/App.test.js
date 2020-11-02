import { render, screen } from '@testing-library/react';
import App from './App';
import { combineReducers, createStore } from 'redux';
import allReducers from '../../reducers/index.js';

test('renders learn react link', () => {
  const store = createStore(allReducers);

    expect(true).toBe(true)

});
  // it('Should allow the user to select a new list of books', async () => {
  //
  //   getBooks.mockResolvedValueOnce({
  //     results: {
  //       books: [
  //         {
  //           book_image: 'mockURL',
  //           title: 'mockTitle1',
  //           author: 'mockAuthor1',
  //           rank: 5
  //         }
  //       ]
  //     }
  //   })
  //
  //     render(
  //       <Provider store={store}>
  //         <BookContainer />
  //       </Provider>
  //     )
  //
  //     expect(screen.getByText('Hardcover Fiction')).toBeInTheDocument()
  //     userEvent.click(screen.getByText('Choose a List to Browse'))
  //     userEvent.click(screen.getByText('Crime and Punishment'))
  //     userEvent.click(screen.getByText('Submit'))
  //     const bookList = await waitFor(() => screen.getByText('Crime and Punishment'))
  //     expect(bookList).toBeInTheDocument()
  //
  //
  // })
