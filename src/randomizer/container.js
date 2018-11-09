import React from 'react';
import {connect} from 'react-redux';
import SearchIndex from '../search/index';
import RandomizerInput from './input';
import {randomizeRestaurant} from '../actions/randomizeRestaurant';
import {addRestaurant} from '../actions/addRestaurant'

class RandomizerContainer extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.randomizeRestaurant();
  }
  render () {
    return (
      <div>
        <RandomizerInput randomizeRestaurant={this.props.randomizeRestaurant}/>
        <SearchIndex loading={this.props.loading} restaurants={this.props.restaurants}
          addRestaurant={this.props.addRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.yelp.loading,
    restaurants: state.yelp.restaurants
  }
}
export default connect(mapStateToProps, {randomizeRestaurant, addRestaurant})(RandomizerContainer);
