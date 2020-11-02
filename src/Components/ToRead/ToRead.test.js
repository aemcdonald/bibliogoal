import React from 'react';
import ToRead from './ToRead';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js';

describe('ToRead', () => {
  it('display a message if list is empty', () => {

    const store = createStore(allReducers);

    render(
      <Provider store={store}>
        <ToRead />
      </Provider>
    )
    expect(screen.getByText('Add some books to read!')).toBeInTheDocument()
  })
})
