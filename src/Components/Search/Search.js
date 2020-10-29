import React, { Component } from 'react';
import { getBooks } from '../../apiCalls.js';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      list: ''
    }
  }

  getSearchList = async (event) => {
    let listName = this.state.list
    await getBooks(listName);
  }

  updateValue = (event) => {
    this.setState({list: event.target.value})
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
          <option value='Crime and Punishment'>Crime Fiction</option>
        </select>
        <button className='search-submit' type='button' onClick={this.getSearchList}>Submit</button>
      </div>
    )
  }
}

export default Search;
