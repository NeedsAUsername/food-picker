import React from 'react';
import SearchInput from './input';
import Restaurants from '../restaurants/index';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/fetchRestaurants';
import {addRestaurant} from '../actions/addRestaurant';
import {deleteRestaurant} from '../actions/deleteRestaurant';
import {fetchUser} from '../actions/fetchUser';

class SearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <div className="search-container">
        <SearchInput fetchRestaurants={this.props.fetchRestaurants}/>
        <Restaurants loading={this.props.loading} restaurants={this.props.restaurants} addRestaurant={this.props.addRestaurant} deleteRestaurant={this.props.deleteRestaurant} userRestaurants={this.props.userRestaurants}/>
        {this.props.noResults ? 'No Results' : null}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    userRestaurants: store.user.restaurantIds,
    restaurants: store.yelp.restaurants,
    noResults: store.yelp.noResults,
    loading: store.yelp.loading
  }
}

export default connect(mapStateToProps,
  {fetchRestaurants, addRestaurant, deleteRestaurant, fetchUser})(SearchContainer);
