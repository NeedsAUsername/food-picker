import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YelpContainer from './yelp/container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Food Picker</h1>
        <YelpContainer />
      </div>
    );
  }
}

export default App;
