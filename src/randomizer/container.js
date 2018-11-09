import React from 'react';
import {connect} from 'react-redux';
import {randomizeRestaurant} from '../actions/randomizeRestaurant';
import SearchIndex from '../search/index';
import RandomizerInput from './input';

class RandomizerContainer extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.randomizeRestaurant();
  }
  render () {
    return (
      <div>
        <RandomizerInput randomizeRestaurant={this.props.randomizeRestaurant}/>
        <SearchIndex loading={this.props.loading} restaurants={this.props.restaurants}/>
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
export default connect(mapStateToProps, {randomizeRestaurant})(RandomizerContainer);
