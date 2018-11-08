import React from 'react';
import YelpInput from './input';
import YelpIndex from './index';
import {connect} from 'react-redux';

class YelpContainer extends React.Component {
  render () {
    return (
      <div>
        Yelp Container
        <YelpInput />
        <YelpIndex />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.yelp.restaurants
  }
}

export default connect(mapStateToProps)(YelpContainer);
