import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import './HaveRead.css';

const HaveRead = ({ haveReadList }) => {
  const displayHaveReadBooks = () => {
    if (haveReadList.length > 0) {
      return haveReadList.map((book, i) => {
        return (
          <BookCard
            key={i}
            bookInfo={book}
          />
        )
      })
    } else {
      return (<h3>Your list is empty, add some books that you've read!</h3>)
    }
  }

  return (
    <h1 className='have-read-display'>{displayHaveReadBooks()}</h1>
  )
}

const mapStateToProps = state => ({
  haveReadList: state.haveReadList
})


export default connect(
  mapStateToProps
)(HaveRead);
