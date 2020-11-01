import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// import { getNYTList } from '../../actions';
import Search from '../Search/Search';
import BookContainer from '../BookContainer/BookContainer';
import HaveRead from '../HaveRead/HaveRead';
import ToRead from '../ToRead/ToRead';
import GoalForm from '../GoalForm/GoalForm';
// import { connect } from 'react-redux';
// import { getBooks } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <main>
        <h1 className='title'>BiblioGoal</h1>
        <GoalForm />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/have-read'>Books I Have Read</Link>
        <Link to='/to-read'>Books To Read</Link>
      </nav>
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

// const mapStateToProps = state => ({
//   books: state.books
// })
//
// const mapDispatchToProps = dispatch => ({
//   getNYTList: books => dispatch(getNYTList(books))
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default App;
