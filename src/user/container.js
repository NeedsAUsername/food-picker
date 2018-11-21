import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import {deleteRestaurantAndDisplay} from '../actions/deleteRestaurantAndDisplay';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {

  render () {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants} loading={this.props.loading}
          deleteRestaurant={this.props.deleteRestaurantAndDisplay}
          userRestaurants={this.props.restaurants}/>
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

export default connect(mapStateToProps, {fetchRestaurantById, deleteRestaurantAndDisplay})(UserContainer);
