import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantById} from '../actions/fetchRestaurantById';
import SearchIndex from '../search/index';

class UserContainer extends React.Component {
  componentDidMount() {
    console.log('mounting');
    this.props.restaurantIds.forEach(rest => this.props.fetchRestaurantById(rest))
  }
  render () {
    return (
      <div>
        <SearchIndex restaurants={this.props.restaurants} loading={this.props.loading}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurantIds: store.user.restaurantIds,
    restaurants: store.user.restaurants
  }
}

export default connect(mapStateToProps, {fetchRestaurantById})(UserContainer);
