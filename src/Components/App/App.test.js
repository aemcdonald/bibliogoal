import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
// import BookContainer from './BookContainer';
import { combineReducers, createStore } from 'redux';
import allReducers from '../../reducers/index.js';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getBooks } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App', () => {
  const store = createStore(allReducers);
  // it('Should allow the user to select a new list of books', async () => {
  //
  //   getBooks.mockResolvedValue({
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
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   )
  //
  //   expect(screen.getByText('Hardcover Fiction')).toBeInTheDocument()
  //   userEvent.click(screen.getByText('Choose a List to Browse'))
  //   fireEvent.change(screen.getByRole('combobox'), {target: {value: 'Crime and Punishment'}})
  //   expect(screen.getByRole('combobox')).toHaveValue('Crime and Punishment')
  //   // userEvent.click(screen.getByText('Crime and Punishment'))
  //   // expect(screen.getByRole('combobox')).toHaveValue('Crime and Punishment')
  //   userEvent.click(screen.getByTestId('search-button'))
  //   const bookList = await waitFor(() => {
  //     screen.getByTestId('list-title')
  //   })
  //   screen.debug();
  //
  //   expect(bookList).toBe('Crime and Punishment')
  // })
});
