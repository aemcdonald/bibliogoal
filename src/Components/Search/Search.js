import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListName } from '../../actions';
import { getBooks } from '../../apiCalls.js';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  getSearchList = (event) => {
    this.props.getListName(this.state.listName)
  }

  updateValue = (event) => {
    this.setState({listName: event.target.value})
  }

  render() {
    return (
      <div className='search'>
        <select
        className='search-menu'
        name='list-genre'
        onChange={this.updateValue}
        >
          <option value=''>Choose a List to Browse</option>
          <option value='Hardcover Fiction'>Fiction</option>
          <option value='Hardcover Nonfiction'>Nonfiction</option>
          <option value='Celebrities'>Celebrities</option>
          <option value='Crime and Punishment'>Crime and Punishment</option>
        </select>
        <button data-testid='search-button' className='search-submit' type='button' onClick={this.getSearchList}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listName: state.listName
})

const mapDispatchToProps = dispatch => ({
  getListName: listName => dispatch(getListName(listName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

Search.propTypes = {
  listName: PropTypes.string
}
