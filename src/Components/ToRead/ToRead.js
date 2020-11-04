import React from 'react';
import { connect } from 'react-redux';
import { addToHaveRead, updateToRead } from '../../actions';
import BookCard from '../BookCard/BookCard';
import PropTypes from 'prop-types';
import './ToRead.css';


const ToRead = ({ books, toReadList, addToHaveRead }) => {
  const addToHaveReadList = (event) => {
    let readBook = books.find(book => {
      return book.title === event.target.value
    })
    addToHaveRead(readBook)
    //gets added to HaveReadList
    //method:
      //if book is on HaveReadList AND toReadList
        //remove book from toReadList

    if (toReadList.some(book => book.title === readBook.title)) {
      const updatedList = toReadList.filter(book => {
        return book.title !== readBook.title
      })
      console.log(updatedList);
      //call action here:
      updateToRead(updatedList)
    }
  }

  const displayToReadBooks = () => {
    if (toReadList.length > 0) {
      return toReadList.map((book, i) => {
        return (
          <BookCard
            key={i}
            bookInfo={book}
            addToHaveReadList={addToHaveReadList}
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
  books: state.books,
  toReadList: state.toReadList,
  haveReadList: state.haveReadList
  // updatedList: state.updatedList?
})

const mapDispatchToProps = dispatch => ({
  addToHaveRead: readBook => dispatch(addToHaveRead(readBook)),
  updateToRead: updatedList => dispatch(updateToRead(updatedList))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToRead);

ToRead.propTypes = {
  toReadList: PropTypes.array,
  haveReadList: PropTypes.array
}

//if haveRead button clicked
  //should remove book from to read list in state

// const removeBook = (event) => {
//   const foundBookToRemove = toReadList.find(book => {
//     return book.title === event.target.value
//   })
//   if (foundBookToRemove) {
//     const updatedList = toReadList.filter(book => {
//       return book.title !== event.target.value
//     })
//   }
//   //call action here:
//   console.log(updatedList);
//   updateToRead(updatedList)
// }

//pass delete functionality to bookCard
