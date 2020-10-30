import React, { Component } from 'react';
import BookCard from '../../BookCard/BookCard';
import { connect } from 'react-redux';
import { getNYTList } from '../../actions';
import { getBooks } from '../../apiCalls.js';
import './bookContainer.css';

class BookContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    const bookList = await getBooks(this.props.listName)
    const allBooks = bookList.results.books
    this.props.getNYTList(allBooks)
    // .catch(error => console.log('error', error))
    // refactor to set user message into state depending on where state will be stored
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props.listName !== prevProps.listName) {
      const bookList = await getBooks(this.props.listName)
      const allBooks = bookList.results.books
      this.props.getNYTList(allBooks)
    }
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
  books: state.books,
  listName: state.listName
})

const mapDispatchToProps = dispatch => ({
  getNYTList: books => dispatch(getNYTList(books)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
