import React from 'react';
import {connect} from 'react-redux';
import {randomizeRestaurant} from '../actions/randomizeRestaurant';
import SearchIndex from '../search/index';

class RandomizerContainer extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.randomizeRestaurant();
  }
  render () {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Tell Me Where To Go</button>
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
