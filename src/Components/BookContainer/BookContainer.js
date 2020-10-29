import React, { Component } from 'react';
import BookCard from '../../BookCard/BookCard';
import { connect } from 'react-redux';
import { getInitialBooks } from '../../actions';
import { getBooks } from '../../apiCalls.js';
import './bookContainer.css';

class BookContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    const bookList = await getBooks()
    const allBooks = bookList.results.books
    this.props.getInitialBooks(allBooks)
    // .catch(error => console.log('error', error))
    // refactor to set user message into state depending on where state will be stored
  }

  displayBooks = () => {
    return this.props.books.map((book, i) => {
      return (
        <BookCard
          key={i}
          bookInfo={book}
        />
      )
    })
  }

  render() {
    const bookCards = this.displayBooks();
    return (
      <main>
        <h1>Book Container</h1>
        <section>{bookCards}</section>
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
)(BookContainer);
