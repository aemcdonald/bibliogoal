import React, { Component } from 'react';
import './GoalForm.css';

class GoalForm extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <form>
        <input
          type='number'
          placeholder='Add reading goal'
          name='userGoal'
        />
        <button type='button'>Submit</button>
      </form>
    )
  }
}
export default GoalForm;
