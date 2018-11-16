import React from 'react';
import {connect} from 'react-redux';
import Restaurants from '../restaurants/index';
import RandomizerInput from './input';
import {randomizeRestaurant} from '../actions/randomizeRestaurant';
import {addRestaurant} from '../actions/addRestaurant';
import {deleteRestaurant} from '../actions/deleteRestaurant';
import {fetchUser} from '../actions/fetchUser';

class RandomizerContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.randomizeRestaurant();
  }
  render () {
    return (
      <div>
        <RandomizerInput randomizeRestaurant={this.props.randomizeRestaurant}/>
        <Restaurants loading={this.props.loading} restaurants={this.props.restaurants}
          addRestaurant={this.props.addRestaurant} deleteRestaurant={this.props.deleteRestaurant} userRestaurants={this.props.userRestaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.yelp.loading,
    restaurants: state.yelp.restaurants,
    userRestaurants: state.user.restaurantIds
  }
}
export default connect(mapStateToProps,
  {randomizeRestaurant, addRestaurant, deleteRestaurant, fetchUser})(RandomizerContainer);
