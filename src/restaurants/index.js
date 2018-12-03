import React from 'react';
import Spinner from 'react-spinkit';
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
  renderLoadingIcon = () => (
    <div className="icon-wrapper">
      Loading Restaurants...
      <Spinner name="circle" color="blue" fadeIn="none"/>
    </div>
  )

  render () {
    return (
      <div>
        {this.props.loading ? this.renderLoadingIcon() : this.renderRestaurants()}
      </div>
    )
  }
}

export default Restaurants;
