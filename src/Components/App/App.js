import React, { Component } from 'react';
import Search from '../Search/Search';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <main>
        <h1>Bibliogoal</h1>
        <Search />
      </main>
    )
  }
}

export default App;
