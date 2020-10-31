import React from 'react';
import './BookCard.css';

const BookCard = ({ bookInfo, addToToReadList } ) => {
  return (
    <div className='bookcard'>
      <img className='bookcover' src={bookInfo.book_image} alt='front cover of book'/>
      <section className='bookdata'>
        <div className='bookinfo'>
          <h5 className='booktitle'>Title: {bookInfo.title}</h5>
          <h5 className='author'>Author: {bookInfo.author}</h5>
          <h5 className='rank'>Rank: {bookInfo.rank}</h5>
        </div>
        <div className='book-btns'>
          <button className='to-read-btn' type='button' value={bookInfo.title} onClick={event => addToToReadList(event)}>To Read</button>
        </div>
      </section>
    </div>
  )
}

export default BookCard;
