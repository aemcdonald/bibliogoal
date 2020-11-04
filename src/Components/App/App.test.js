import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import allReducers from '../../reducers/index.js';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  const store = createStore(allReducers);

  it('should display a user goal message to the user after submitting a goal', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </ BrowserRouter>
      </ Provider>
    )

    userEvent.type(screen.getByPlaceholderText('Add reading goal'), '5')
    const submits = screen.getAllByText('Submit')
    expect(submits).toHaveLength(2)
    userEvent.click(submits[0])

    expect(screen.getByText('You have read 0 of 5 books on your list.')).toBeInTheDocument();
  });
});
