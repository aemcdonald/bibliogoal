import React from 'react';
import BookCard from './BookCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js'

describe('BookCard', () => {
  it('render a book card', () => {

const store = createStore(allReducers);
// const allReducers = combineReducers({
//   books,
//   listName,
//   toReadList,
//   haveReadList,
//   setUserGoal
// })

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

    expect(screen.getByText('Title: mockTitle')).toBeInTheDocument()
    expect(screen.getByText('Author: mockAuthor')).toBeInTheDocument()
    expect(screen.getByText('Rank: 5')).toBeInTheDocument()



  })
})
