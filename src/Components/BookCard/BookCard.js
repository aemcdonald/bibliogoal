import React from 'react';
import './BookCard.css';

const BookCard = ({ bookInfo, addToToReadList, addToHaveReadList } ) => {
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
          <button className='to-read-btn' type='button' value={bookInfo.title} onClick={event => addToToReadList(event)}>To Read</button>
          <button className='have-read-btn' type='button' value={bookInfo.title} onClick={event => addToHaveReadList(event)}>Have Read</button>
        </div>
      </section>
    </div>
  )
}

export default BookCard;
