import React from 'react';
import { connect } from 'react-redux';
import './BookCard.css';

const BookCard = ({ toReadList, haveReadList, bookInfo, addToToReadList, addToHaveReadList } ) => {
  return (
    <div className='bookcard'>
      <img className='bookcover' src={bookInfo.book_image} alt='front cover of book'/>
      <section className='bookdata'>
        <div className='bookinfo'>
          <h5 className='booktitle'>Title: <br></br> {bookInfo.title}</h5>
          <h5 className='author'>Author: {bookInfo.author}</h5>
          <h5 className='rank'>Rank: {bookInfo.rank}</h5>
        </div>
        <div className='book-btns'>
          {!toReadList.includes(bookInfo) &&
          <button className='to-read-btn' type='button' value={bookInfo.title} onClick={event => addToToReadList(event)}>To Read</button>}
          {!haveReadList.includes(bookInfo) &&
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
  //mapDispatchToProps
)(BookCard);
