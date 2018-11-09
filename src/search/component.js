import React from 'react';
import yelpLogo from '../images/Yelp_trademark_RGB.png';

class SearchComponent extends React.Component {

  render () {
    const rest = this.props.restaurant;
    return (
      <div>
        <img width="50" height="40" src={rest.image_url} alt="restaurant" />
        <a href={rest.url} target="_blank">{rest.name}</a>
        <a href={rest.url} target="_blank"><img src={yelpLogo} /></a>
        <div>
          {rest.location.display_address.join(' ')}
        </div>
        <div>
          {rest.isClosed ? 'Closed Right Now :(' : 'Open Now!'}
        </div>
      </div>
    )
  }
}

export default SearchComponent;
