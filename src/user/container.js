import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';

class UserContainer extends React.Component {
  componentDidMount() {
    console.log('mounting');
    this.props.restaurantIds.forEach(rest => this.props.fetchRestaurantById(rest))
  }
  render () {
    return (
      <div>
        User Container
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurantIds: store.user.restaurantIds,
    restaurants: store.user.restaurants
  }
}

export default connect(mapStateToProps, {fetchRestaurantById})(UserContainer);
