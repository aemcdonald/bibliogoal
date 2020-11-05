import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import BookContainer from '../BookContainer/BookContainer';
import HaveRead from '../HaveRead/HaveRead';
import ToRead from '../ToRead/ToRead';
import GoalForm from '../GoalForm/GoalForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main-area">
        <h1 className='title'>BiblioGoal</h1>
        <section className='nav-area'>
          <nav className='links'>
            <Link className='homelink' to='/'>Home</Link> || <Link className='have-read-link' to='/have-read'>Books I Have Read</Link> || <Link className='to-read-link' to='/to-read'>Books To Read</Link>
          </nav>
          <section className='goal-form-area'>
            <GoalForm />
            {this.props.userGoal &&
            <p className='progress-text'>You have read {this.props.haveReadList.length} of {this.props.userGoal} books on your list.</p>}
            {this.props.userGoal && this.props.haveReadList.length >= this.props.userGoal &&
            <p className='progress-text'>Congratulations! You've met your reading goal!</p>}
          </section>
        </section>
        <Route exact path='/'>
          <Search />
          <BookContainer />
        </Route>
        <Route exact path='/have-read'>
          <HaveRead />
        </ Route>
        <Route exact path='/to-read'>
          <ToRead />
        </ Route>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  userGoal: state.setUserGoal,
  haveReadList: state.haveReadList
})

export default connect(
  mapStateToProps
)(App)


App.propTypes = {
  userGoal: PropTypes.string,
  haveReadList: PropTypes.array
}
