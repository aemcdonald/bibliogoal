import React from 'react';
import { connect } from 'react-redux';
import './BookCard.css';
import PropTypes from 'prop-types';

const BookCard = ({ toReadList, haveReadList, bookInfo, addToToReadList, addToHaveReadList } ) => {
  let foundBook = toReadList.find(book => {
    return bookInfo.title === book.title
  });
  let readBook = haveReadList.find(book => {
    return bookInfo.title === book.title
  })

  return (
    <div className='bookcard'>
      <img className='bookcover' src={bookInfo.book_image} alt='front cover of book'/>
      <section className='bookdata'>
        <div className='bookinfo'>
          <h3 className='booktitle'>Title: <br></br> {bookInfo.title}</h3>
          <p className='author'>Author: {bookInfo.author}</p>
          <p className='rank'>Rank: {bookInfo.rank}</p>
        </div>
        <div className='book-btns'>
          {foundBook === undefined && readBook === undefined &&
          <button className='to-read-btn' type='button' value={bookInfo.title} onClick={event => addToToReadList(event)}>To Read</button>}
          {readBook === undefined &&
          <button className='have-read-btn' type='button' value={bookInfo.title} onClick={event => addToHaveReadList(event)}>Have Read</button>}
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  toReadList: state.toReadList,
  haveReadList: state.haveReadList
})

export default connect(
  mapStateToProps,
)(BookCard);

BookCard.propTypes = {
  toReadList: PropTypes.array,
  haveReadList: PropTypes.array,
  bookInfo: PropTypes.object,
  addToHaveReadList: PropTypes.func,
  addToToReadList: PropTypes.func
}
