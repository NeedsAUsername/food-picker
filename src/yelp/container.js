import React from 'react';
import YelpInput from './input';
import YelpIndex from './index';

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

export default YelpContainer;
