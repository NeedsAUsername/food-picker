import React from 'react';
import SearchInput from './input';
import SearchIndex from './index';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/fetchRestaurants';
import {addRestaurant} from '../actions/addRestaurant';

class SearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants('location=11354');
  }

  render () {
    return (
      <div>
        <SearchInput fetchRestaurants={this.props.fetchRestaurants}/>
        <SearchIndex loading={this.props.loading} restaurants={this.props.restaurants} addRestaurant={this.props.addRestaurant} userRestaurants={this.props.userRestaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    userRestaurants: store.user.restaurantIds,
    restaurants: store.yelp.restaurants,
    loading: store.yelp.loading
  }
}

export default connect(mapStateToProps, {fetchRestaurants, addRestaurant})(SearchContainer);
