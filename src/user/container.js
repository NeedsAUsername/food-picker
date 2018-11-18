import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import {fetchUser} from '../actions/fetchUser';
import {deleteRestaurantAndDisplay} from '../actions/deleteRestaurantAndDisplay';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  fetchRestaurants = () => {
    if (this.props.restaurants == "" && this.props.restaurantIds != "") {
      return this.props.restaurantIds.forEach(rest => this.props.fetchRestaurantById(rest))
    } else if (this.props.restaurantIds == "") {return <p>No Restaurants Saved</p>}
  }
  render () {
    return (
      <div>
        {this.fetchRestaurants()}
        <Restaurants restaurants={this.props.restaurants} loading={this.props.loading}
          deleteRestaurant={this.props.deleteRestaurantAndDisplay}
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

export default connect(mapStateToProps, {fetchUser, fetchRestaurantById, deleteRestaurantAndDisplay})(UserContainer);
