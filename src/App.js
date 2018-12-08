import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import foodBackground1 from './images/food-background-1.jpg';
import SearchContainer from './search/container';
import RandomizerContainer from './randomizer/container';
import UserContainer from './user/container';
import AuthenticationContainer from './authentication/container';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {emptyRestaurants} from './actions/yelp/emptyRestaurants';
import {fetchUser} from './actions/user/fetchUser';

const routes = [{path: '/', name: 'Home'},
  {path: '/random', name: 'Random'},
  {path: '/saved', name: 'Saved'},
  {path: '/account', name: 'Account'}
];

class App extends Component {
  componentDidMount() {
    if (!!localStorage.token & !!localStorage.email) {
      this.props.fetchUser();
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar emptyRestaurants={this.props.emptyRestaurants} restaurants={this.props.restaurants} routes={routes}/>
          <div className="background"><img src={foodBackground1} alt="background"></img></div>
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
    restaurantIds: store.user.restaurantIds,
    restaurants: store.yelp.restaurants
  }
}

export default connect(mapStateToProps,
  {fetchUser, emptyRestaurants})(App);
