import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YelpContainer from './yelp/container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Randomizer from './yelp/randomizer'

const testing = () => {
  return (<div>testing</div>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Food Picker</h1>
          <Route exact path='/' component={YelpContainer} />
          <Route exact path='/random' component={Randomizer} />
        </div>
      </Router>
    );
  }
}

export default App;
