import React from 'react';
import Search from './Search';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js';


describe('Search', () => {
  it('Should render a search form', () => {

    const store = createStore(allReducers);

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    )

    const dropDown = screen.getByRole('combobox')
    expect(screen.getByText('Choose a List to Browse')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(dropDown).toHaveLength(5)
  })
})
