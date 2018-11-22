import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchContainer from './search/container';
import RandomizerContainer from './randomizer/container';
import UserContainer from './user/container';
import AuthenticationContainer from './authentication/container';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {emptyRestaurants} from './actions/emptyRestaurants';
import {fetchUser} from './actions/fetchUser';
import {fetchRestaurantById} from './actions/fetchRestaurantById';

const routes = [{path: '/', name: 'Home'},
  {path: '/random', name: 'Random'},
  {path: '/saved', name: 'Saved'},
  {path: '/account', name: 'Account'}
];

class App extends Component {
  componentDidMount() {
    if (localStorage.email && localStorage.token) {
      this.props.fetchUser();
    }
  }
  fetchRestaurants = () => {
    if (this.props.restaurantIds.length > 0) {
      return this.props.restaurantIds.forEach(rest => this.props.fetchRestaurantById(rest))
    }
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar emptyRestaurants={this.props.emptyRestaurants} routes={routes}/>
          {this.fetchRestaurants()}
          <Route exact path='/' component={SearchContainer} />
          <Route exact path='/random' component={RandomizerContainer} />
          <Route exact path='/saved' component={UserContainer} />
          <Route exact path='/account' component={AuthenticationContainer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    restaurantIds: store.user.restaurantIds
  }
}

export default connect(mapStateToProps,
  {fetchUser, fetchRestaurantById, emptyRestaurants})(App);
