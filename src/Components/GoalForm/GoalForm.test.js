import React from 'react';
import GoalForm from './GoalForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index.js'

describe('GoalForm', () => {
  const store = createStore(allReducers);
  const mockSetUserGoal = jest.fn();

  it('should render a form', () => {

    render(
      <Provider store={store}>
        <GoalForm />
      </ Provider>
    )
    expect(screen.getByPlaceholderText('Add reading goal')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
