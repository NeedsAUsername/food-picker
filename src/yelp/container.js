import React from 'react';
import YelpInput from './input';
import YelpIndex from './index';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/fetchRestaurants';

class YelpContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants('location=11354');
  }

  render () {
    return (
      <div>
        <YelpInput fetchRestaurants={this.props.fetchRestaurants}/>
        <YelpIndex loading={this.props.loading} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.yelp.restaurants,
    loading: state.yelp.loading
  }
}

export default connect(mapStateToProps, {fetchRestaurants})(YelpContainer);
