import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import PropTypes from 'prop-types';
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
      return (<p>Add some books to read!</p>)
    }
  }

  return (
    <section>
      <h1 className='to-read-title'>Books To Read</h1>
      <div className='to-read-display'>{displayToReadBooks()}</div>
    </section>
  )
}

const mapStateToProps = state => ({
  toReadList: state.toReadList
})


export default connect(
  mapStateToProps
)(ToRead);

ToRead.propTypes = {
  toReadList: PropTypes.array
}
