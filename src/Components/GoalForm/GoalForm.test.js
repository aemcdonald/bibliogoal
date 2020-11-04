import React from 'react';
import GoalForm from './GoalForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js'

describe('GoalForm', () => {
  const store = createStore(allReducers);

  it('should render a form', () => {

    render(
      <Provider store={store}>
        <GoalForm />
      </ Provider>
    )
    expect(screen.getByPlaceholderText('Add reading goal')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  });
});
