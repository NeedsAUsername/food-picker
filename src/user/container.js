import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import {checkUser} from '../actions/checkUser';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {
  // https://stackoverflow.com/questions/47970276/is-using-async-componentdidmount-good
  async componentDidMount() {
    console.log('syncing');
    await checkUser();
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
