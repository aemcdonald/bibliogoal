import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <select
      className='search-menu'
      name='list-genre'
      >
        <option value='Hardcover Fiction'>Fiction</option>
        <option value='Hardcover Nonfiction'>Nonfiction</option>
        <option value='Celebrities'>Celebrities</option>
        <option value='Crime and Punishment'>Crime Fiction</option>
      </select>
    )
  }
}

export default Search;
