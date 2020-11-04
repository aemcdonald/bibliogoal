import React from 'react';
import HaveRead from './HaveRead';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js';

describe('HaveRead', () => {
  it('display a message if list is empty', () => {

    const store = createStore(allReducers);

    render(
      <Provider store={store}>
        <HaveRead />
      </Provider>
    )
    expect(screen.getByText('Your list is empty, add some books that you\'ve read!')).toBeInTheDocument()
  })
})
