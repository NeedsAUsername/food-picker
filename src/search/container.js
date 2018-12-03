import React from 'react';
import SearchInput from './input';
import Restaurants from '../restaurants/index';
import {connect} from 'react-redux';
import {addRestaurant} from '../actions/user/addRestaurant';
import {deleteRestaurant} from '../actions/user/deleteRestaurant';
import {fetchRestaurants} from '../actions/yelp/fetchRestaurants';



class SearchContainer extends React.Component {

  render () {
    return (
      <div className="search-container">
        <SearchInput fetchRestaurants={this.props.fetchRestaurants}/>
        <Restaurants loading={this.props.loading} restaurants={this.props.restaurants}
          userRestaurants={this.props.userRestaurants} addRestaurant={this.props.addRestaurant} deleteRestaurant={this.props.deleteRestaurant} />
        {this.props.noResults ? 'No Results' : null}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurants: store.yelp.restaurants,
    userRestaurants: store.user.restaurants,
    noResults: store.yelp.noResults,
    loading: store.yelp.loading
  }
}

export default connect(mapStateToProps,
  {fetchRestaurants, addRestaurant, deleteRestaurant})(SearchContainer);
