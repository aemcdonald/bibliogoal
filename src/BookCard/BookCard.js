import React from 'react';
import './BookCard.css';

const BookCard = ({ bookInfo, addToToReadList } ) => {
  return (
    <div className='bookcard'>
      <button className='to-read-btn' type='button' value={bookInfo.title} onClick={event => addToToReadList(event)}>+</button>
      <img className='bookcover' src={bookInfo.book_image} alt='front cover of book'/>
      <h5>Title: {bookInfo.title}</h5>
      <h5>Author: {bookInfo.author}</h5>
      <h5>Rank: {bookInfo.rank}</h5>
    </div>
  )
}

export default BookCard;
