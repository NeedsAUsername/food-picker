import React from 'react';
import Spinner from 'react-spinkit';
import Restaurant from './component';

class Restaurants extends React.Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant =>
      <Restaurant key={restaurant.id} restaurant={restaurant}
        userRestaurants= {this.props.userRestaurants}
        addRestaurant={() => this.props.addRestaurant(restaurant)}
        deleteRestaurant={() => this.props.deleteRestaurant(restaurant.id)}
      />
    )
  }
  renderLoadingIcon = () => (
    <div className="icon-wrapper">
      Loading Restaurants...
      <Spinner name="circle" color="blue" fadeIn="none"/>
    </div>
  )
  componentDidUpdate() {
    let rest = document.querySelector('.content');
    if (this.props.restaurants && rest) {
      rest.scrollIntoView()
    }
  }
  render () {
    return (
      <div className="content">
        {this.props.loading ? this.renderLoadingIcon() : this.renderRestaurants()}
      </div>
    )
  }
}

export default Restaurants;
