import React, { Component } from 'react';
import './App.css';

import GuestList from './components/GuestList';
import Counter from './components/Counter';
import Header from './components/Header';
import UnconfirmedGuestFilter from './components/UnconfirmedGuestFilter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <UnconfirmedGuestFilter />
          <Counter />
          <GuestList />
        </div>
      </div>
    );
  }
}

export default App;
