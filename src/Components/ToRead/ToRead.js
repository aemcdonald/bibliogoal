import React from 'react';
import { connect } from 'react-redux';
import { addToHaveRead } from '../../actions';
import BookCard from '../BookCard/BookCard';
import PropTypes from 'prop-types';
import './ToRead.css';


const ToRead = ({ books, toReadList, addToHaveRead }) => {
  const addToHaveReadList = (event) => {
    let readBook = books.find(book => {
      return book.title === event.target.value
    })
    addToHaveRead(readBook)
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
  addToHaveRead: readBook => dispatch(addToHaveRead(readBook))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToRead);

ToRead.propTypes = {
  toReadList: PropTypes.array,
  haveReadList: PropTypes.array
}
