import React, { Component } from 'react';
import BookCard from '../BookCard/BookCard';
import { connect } from 'react-redux';
import { getNYTList, addToRead, addToHaveRead } from '../../actions';
import { getBooks } from '../../apiCalls.js';
import PropTypes from 'prop-types';
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

  addToToReadList = (event) => {
    let foundBook = this.props.books.find(book => {
      return book.title === event.target.value
    })
    this.props.addToRead(foundBook)
  }

  addToHaveReadList = (event) => {
    let readBook = this.props.books.find(book => {
      return book.title === event.target.value
    })
    this.props.addToHaveRead(readBook)
  }

  displayBooks = () => {
    return this.props.books.map((book, i) => {
      return (
        <BookCard
          key={i}
          bookInfo={book}
          addToToReadList={this.addToToReadList}
          addToHaveReadList={this.addToHaveReadList}
        />
      )
    })
  }

  render() {
    const bookCards = this.displayBooks();
    return (
      <section>
        <h2 data-testid='list-title' className='list-title'>{this.props.listName}</h2>
        <section className='card-container'>{bookCards}</section>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
  listName: state.listName,
  toReadList: state.toReadList,
  haveReadList: state.haveReadList
})

const mapDispatchToProps = dispatch => ({
  getNYTList: books => dispatch(getNYTList(books)),
  addToRead: foundBook => dispatch(addToRead(foundBook)),
  addToHaveRead: readBook => dispatch(addToHaveRead(readBook))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);

BookContainer.propTypes = {
  books: PropTypes.array,
  listName: PropTypes.string,
  toReadList: PropTypes.array,
  haveReadList: PropTypes.array
}
