import React from 'react';
import {connect} from 'react-redux';
import {deleteRestaurant} from '../actions/user/deleteRestaurant';
import Restaurants from '../restaurants/index';

class UserContainer extends React.Component {

  render () {
    return (
      <div>
        {this.props.restaurants.length > 0 ? null : <div className="readable-bordered">No Saved Restaurants</div>}
        <Restaurants restaurants={this.props.restaurants} loading={this.props.loading}
          deleteRestaurant={this.props.deleteRestaurant}
          userRestaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.user.loading,
    restaurants: store.user.restaurants
  }
}

export default connect(mapStateToProps, {deleteRestaurant})(UserContainer);
