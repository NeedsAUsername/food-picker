import React from 'react';
import yelpLogo from '../images/Yelp_trademark_RGB.png';

const restaurant = (props) =>  {
  const rest = props.restaurant;
  return (
    <div className="restaurant-container">
      <img width="380" height="300" src={rest.image_url} alt="restaurant-pic-missing" />
      <a href={rest.url} target="_blank" rel="noopener noreferrer"><img src={yelpLogo} alt="Yelp-Logo-Missing"/></a>
      <a href={rest.url} target="_blank" rel="noopener noreferrer">{rest.name}</a>
      <div>
        {rest.location.display_address.join(' ')}
      </div>
      <div>
        {rest.isClosed ? 'Closed Right Now :(' : 'Open Now!'}
        {props.userRestaurants.find(restaurant => restaurant.id === rest.id) ?
          <button onClick={props.deleteRestaurant}>Remove From Saved</button> :
            <button onClick={props.addRestaurant}>Save</button>}
      </div>
    </div>
  )
}

export default restaurant;
