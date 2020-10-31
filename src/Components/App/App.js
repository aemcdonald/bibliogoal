import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
import { getNYTList } from '../../actions';
import Search from '../Search/Search';
import BookContainer from '../BookContainer/BookContainer';
import { connect } from 'react-redux';
import { getBooks } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <main>
        <h1 className='title'>BiblioGoal</h1>
        <Search />
        <BookContainer />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  getNYTList: books => dispatch(getNYTList(books))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
