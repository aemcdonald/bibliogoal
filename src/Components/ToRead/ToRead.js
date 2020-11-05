import React from 'react';
import { connect } from 'react-redux';
import { addToHaveRead, updateToRead } from '../../actions';
import BookCard from '../BookCard/BookCard';
import PropTypes from 'prop-types';
import './ToRead.css';

const ToRead = ({ books, toReadList, addToHaveRead }) => {
  const addToHaveReadList = (event) => {
    let readBook = books.find(book => {
      return book.title === event.target.value
    })
    addToHaveRead(readBook)
    if (toReadList.some(book => book.title === readBook.title)) {
      const updatedList = toReadList.filter(book => {
        return book.title !== readBook.title
      })
      updateToRead(updatedList)
    }
  }

  const displayToReadBooks = () => {
    if (toReadList.length > 0) {
      return toReadList.map((book, i) => {
        return (
          <BookCard
            key={i}
            bookInfo={book}
            addToHaveReadList={addToHaveReadList}
          />
        )
      })
    } else {
      return (<p>Add some books to read!</p>)
    }
  }

  return (
    <section>
      <h1 className='to-read-title'>Books To Read</h1>
      <div className='to-read-display'>{displayToReadBooks()}</div>
    </section>
  )
}

const mapStateToProps = state => ({
  books: state.books,
  toReadList: state.toReadList,
  haveReadList: state.haveReadList
})

const mapDispatchToProps = dispatch => ({
  addToHaveRead: readBook => dispatch(addToHaveRead(readBook)),
  updateToRead: updatedList => dispatch(updateToRead(updatedList))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToRead);

ToRead.propTypes = {
  toReadList: PropTypes.array,
  haveReadList: PropTypes.array
}
