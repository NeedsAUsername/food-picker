import React from 'react';
import yelpLogo from '../images/Yelp_trademark_RGB.png';

class YelpComponent extends React.Component {

  render () {
    const rest = this.props.restaurant;
    return (
      <div>
        <a href={rest.url} target="_blank">{rest.name}</a>
        <a href={rest.url} target="_blank"><img src={yelpLogo} /></a>
      </div>
    )
  }
}

export default YelpComponent;
