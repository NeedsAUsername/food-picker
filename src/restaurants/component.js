import React from 'react';
import yelpLogo from '../images/Yelp_trademark_RGB.png';

class Restaurant extends React.Component {
  render () {
    const rest = this.props.restaurant;
    return (
      <div className="restaurant-container">
        <img width="340" height="280" src={rest.image_url} alt="restaurant-pic-missing" />
        <a href={rest.url} target="_blank" rel="noopener noreferrer"><img src={yelpLogo} alt="Yelp-Logo-Missing"/></a>
        <a href={rest.url} target="_blank" rel="noopener noreferrer">{rest.name}</a>
        <div>
          {rest.location.display_address.join(' ')}
        </div>
        <div>
          {rest.isClosed ? 'Closed Right Now :(' : 'Open Now!'}
          {this.props.userRestaurants.includes(rest.id) ?
            <button onClick={this.props.deleteRestaurant}>Remove From Saved</button> :
              <button onClick={this.props.addRestaurant}>Save</button>}
        </div>
      </div>
    )
  }
}

export default Restaurant;
