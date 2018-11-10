import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {
  componentDidMount() {
    console.log('mounting');
    this.props.restaurantIds.forEach(rest => this.props.fetchRestaurantById(rest))
  }
  render () {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants} loading={this.props.loading}
          userRestaurants={this.props.restaurantIds}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.user.loading,
    restaurantIds: store.user.restaurantIds,
    restaurants: store.user.restaurants
  }
}

export default connect(mapStateToProps, {fetchRestaurantById})(UserContainer);
