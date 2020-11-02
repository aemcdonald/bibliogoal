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
      return (<h3>Add some books to read!</h3>)
    }
  }

  return (
    <div>
      <h1 className='to-read-title'>Books To Read</h1>
      <h1 className='to-read-display'>{displayToReadBooks()}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  toReadList: state.toReadList
})


export default connect(
  mapStateToProps
)(ToRead);
