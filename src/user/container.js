import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import {fetchUser} from '../actions/fetchUser';
import {deleteRestaurant} from '../actions/deleteRestaurant';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {
  // https://stackoverflow.com/questions/47970276/is-using-async-componentdidmount-good
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
