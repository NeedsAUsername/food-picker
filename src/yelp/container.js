import React from 'react';
import YelpInput from './input';
import YelpIndex from './index';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/fetchRestaurants';

class YelpContainer extends React.Component {
  componentDidMount() {
    console.log('mounting');
    this.props.fetchRestaurants('location=11354');
  }

  render () {
    return (
      <div>
        Yelp Container
        <YelpInput />
        <YelpIndex restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.yelp.restaurants
  }
}

export default connect(mapStateToProps, {fetchRestaurants})(YelpContainer);
