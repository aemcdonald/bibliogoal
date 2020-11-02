import React from 'react';
import BookContainer from './BookContainer';
import { render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js';
import { getBooks } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('BookContainer', () => {
  const store = createStore(allReducers);

  it('Should work', async () => {
  getBooks.mockResolvedValueOnce({
    results: {
      books: [
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
    }
  })

    render(
      <Provider store={store}>
        <BookContainer />
      </Provider>
    )

    const title1 = await waitFor(() => screen.getByText('Title: mockTitle1'))
    expect(title1).toBeInTheDocument()
    const author1 = await waitFor(() => screen.getByText('Author: mockAuthor1'))
    expect(author1).toBeInTheDocument()
    const rank1 = await waitFor(() => screen.getByText('Rank: 5'))
    expect(rank1).toBeInTheDocument()
    const title2 = await waitFor(() => screen.getByText('Title: mockTitle2'))
    expect(title2).toBeInTheDocument()
    const author2 = await waitFor(() => screen.getByText('Author: mockAuthor2'))
    expect(author2).toBeInTheDocument()
    const rank2 = await waitFor(() => screen.getByText('Rank: 6'))
    expect(rank2).toBeInTheDocument()
    expect(screen.getByText('Hardcover Fiction')).toBeInTheDocument()
  })
})
