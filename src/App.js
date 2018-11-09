import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './search/container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RandomizerContainer from './randomizer/container'

const testing = () => {
  return (<div>testing</div>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Food Picker</h1>
          <Route exact path='/' component={SearchContainer} />
          <Route exact path='/random' component={RandomizerContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
