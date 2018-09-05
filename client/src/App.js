import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/Navbar'
import ShoppingList from './components/ShoppingList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
