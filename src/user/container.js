import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import {fetchUser} from '../actions/fetchUser';
import {deleteRestaurant} from '../actions/deleteRestaurant';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {
  // https://stackoverflow.com/questions/47970276/is-using-async-componentdidmount-good
  componentDidMount() {
    this.props.loggedIn ? this.props.fetchUser() : this.getRestaurantsFromId();
  }
  getRestaurantsFromId = () => {
    this.props.restaurantIds.forEach(rest => this.props.fetchRestaurantById(rest));
  }
  render () {
    return (
      <div>
        {this.props.loggedIn ? <button onClick={this.getRestaurantsFromId}>Load</button> : null}
        <Restaurants restaurants={this.props.restaurants} loading={this.props.loading}
          deleteRestaurant={this.props.deleteRestaurant}
          userRestaurants={this.props.restaurantIds}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    loggedIn: store.user.authenticated,
    loading: store.user.loading,
    restaurantIds: store.user.restaurantIds,
    restaurants: store.user.restaurants
  }
}

export default connect(mapStateToProps, {fetchUser, fetchRestaurantById, deleteRestaurant})(UserContainer);
