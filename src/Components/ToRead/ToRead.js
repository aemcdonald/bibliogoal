import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import './ToRead.css';


const ToRead = ({ toReadList }) => {
  const displayToReadBooks = () => {
    if (toReadList.length > 0) {
      return toReadList.map((book, i) => {
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
    <h1>{displayToReadBooks()}</h1>
  )
}

const mapStateToProps = state => ({
  toReadList: state.toReadList
})


export default connect(
  mapStateToProps
)(ToRead);
