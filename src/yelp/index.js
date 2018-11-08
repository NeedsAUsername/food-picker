import React from 'react';
import YelpComponent from './component';

class YelpIndex extends React.Component {
  renderRestaurants = () => (
    this.props.restaurants.map(restaurant =>
    <YelpComponent key={restaurant.id} name={restaurant.name} />)
  )

  render () {
    return (
      <div>
        {this.props.loading ? <div>Loading Restaurants...</div> : this.renderRestaurants()}
      </div>
    )
  }
}

export default YelpIndex;
