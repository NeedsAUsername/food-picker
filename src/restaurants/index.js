import React from 'react';
import Restaurant from './component';

class Restaurants extends React.Component {
  renderRestaurants = () => (
    this.props.restaurants.map(restaurant =>
    <Restaurant key={restaurant.id} restaurant={restaurant}
      userRestaurants= {this.props.userRestaurants}
      addRestaurant={() => this.props.addRestaurant(restaurant)}
      deleteRestaurant={() => this.props.deleteRestaurant(restaurant.id)}
    />)
  )

  render () {
    return (
      <div>
        {this.props.loading ? <div>Loading Restaurants...</div> : this.renderRestaurants()}
      </div>
    )
  }
}

export default Restaurants;
