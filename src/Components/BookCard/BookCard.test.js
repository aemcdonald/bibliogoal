import React from 'react';
import BookCard from './BookCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js'

describe('BookCard', () => {
  const store = createStore(allReducers);

    const mockBook = {
      book_image: 'mockURL',
      title: 'mockTitle',
      author: 'mockAuthor',
      rank: '5'
    }
    const mockAddToReadList = jest.fn();
    const mockAddToHaveReadList = jest.fn();

    render(
      <Provider store={store}>
      <BookCard
      key={1}
      bookInfo={mockBook}
      addToToReadList={mockAddToReadList}
      addToHaveReadList={mockAddToHaveReadList}
      />
      </ Provider>
    )

  it('should render a book card', () => {
    expect(screen.getByText('Title: mockTitle')).toBeInTheDocument()
    expect(screen.getByText('Author: mockAuthor')).toBeInTheDocument()
    expect(screen.getByText('Rank: 5')).toBeInTheDocument()
  });

  it('should invoke functions on button clicks', () => {
    render(
      <Provider store={store}>
        <BookCard
          key={1}
          bookInfo={mockBook}
          addToToReadList={mockAddToReadList}
          addToHaveReadList={mockAddToHaveReadList}
        />
      </ Provider>
    )

    userEvent.click(screen.getByText('To Read'))
    expect(mockAddToReadList).toHaveBeenCalledTimes(1)
    userEvent.click(screen.getByText('Have Read'))
    expect(mockAddToHaveReadList).toHaveBeenCalledTimes(1)
  });
});
