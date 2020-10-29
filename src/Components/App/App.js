import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getInitialBooks } from '../../actions';
import Search from '../Search/Search';
import BookContainer from '../BookContainer/BookContainer';
import { connect } from 'react-redux';
import { getBooks } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = async () => {
  // const bookList = await getBooks()
  // const allBooks = bookList.results.books
  // this.props.getInitialBooks(allBooks)
  // // .catch(error => console.log('error', error))
  // // refactor to set user message into state depending on where state will be stored
  //
  // }

  render() {
    return (
      <main>
        <h1>Bibliogoal</h1>
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
  getInitialBooks: books => dispatch(getInitialBooks(books))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
