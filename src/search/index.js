import React from 'react';
import SearchComponent from './component';

class SearchIndex extends React.Component {
  renderRestaurants = () => (
    this.props.restaurants.map(restaurant =>
    <SearchComponent key={restaurant.id} restaurant={restaurant}
      addRestaurant={() => this.props.addRestaurant(restaurant.id)}
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

export default SearchIndex;
