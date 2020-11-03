import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserGoal } from '../../actions';
import './GoalForm.css';

class GoalForm extends Component {
  constructor(props) {
    super(props);
  }

  handleUserInput = (event) => {
    this.setState({ userGoal: event.target.value })
  }

  setUserGoal = (event) => {
    this.props.createUserGoal(this.state.userGoal)
  }

  render() {
    return(
      <form className='goal-form'>
        <input
          className='number-menu'
          type='number'
          min='1'
          placeholder='Add reading goal'
          name='userGoal'
          onChange={event => this.handleUserInput(event)}
        />
        <button data-testid='goal-button' className='goal-submit-btn' type='button' onClick={this.setUserGoal}>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  userGoal: state.userGoal
})

const mapDispatchToProps = dispatch => ({
  createUserGoal: userGoal => dispatch(createUserGoal(userGoal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalForm)
