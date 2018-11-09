import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import SearchContainer from './search/container';
import RandomizerContainer from './randomizer/container';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {emptyRestaurants} from './actions/emptyRestaurants';


const testing = () => {
  return (<div>testing</div>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar emptyRestaurants={this.props.emptyRestaurants}/>
          <Route exact path='/' component={SearchContainer} />
          <Route exact path='/random' component={RandomizerContainer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, {emptyRestaurants})(App);
