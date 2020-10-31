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
      return (<h3>You have not added any books, add some books!</h3>)
    }
  }

  return (
    <h1>{displayHaveReadBooks()}</h1>
  )
}

const mapStateToProps = state => ({
  toReadList: state.toReadList
})


export default connect(
  mapStateToProps
)(HaveRead);
