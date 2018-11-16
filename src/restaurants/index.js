import React from 'react';
import Restaurant from './component';

class Restaurants extends React.Component {
  renderRestaurants = () => (
    this.props.restaurants.map(restaurant =>
    <Restaurant key={restaurant.id} restaurant={restaurant}
      addRestaurant={() => this.props.addRestaurant(restaurant.id)}
      deleteRestaurant={() => this.props.deleteRestaurant(restaurant.id)}
      userRestaurants={this.props.userRestaurants}
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
