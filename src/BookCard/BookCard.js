import React from 'react';
import './BookCard.css';

const BookCard = () => {
  return (
    <div className='bookcard'>
      <img className='bookcover' alt='front cover of book'/>
      <h5>Title:</h5>
      <h5>Author:</h5>
      <h5>Rank:</h5>
    </div>
  )
}

export default BookCard;
