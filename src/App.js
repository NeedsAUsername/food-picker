import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchContainer from './search/container';
import RandomizerContainer from './randomizer/container';
import UserContainer from './user/container';
import Login from './authentication/login';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {emptyRestaurants} from './actions/emptyRestaurants';

const routes = [{path: '/', name: 'Home'},
  {path: '/random', name: 'Random'},
  {path: '/saved', name: 'Saved'},
  {path: '/login', name: 'Login'}
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar emptyRestaurants={this.props.emptyRestaurants} routes={routes}/>
          <Route exact path='/' component={SearchContainer} />
          <Route exact path='/random' component={RandomizerContainer} />
          <Route exact path='/saved' component={UserContainer} />
          <Route exact path='/login' component={Login} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, {emptyRestaurants})(App);
