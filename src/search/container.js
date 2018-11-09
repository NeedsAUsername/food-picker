import React from 'react';
import SearchInput from './input';
import SearchIndex from './index';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/fetchRestaurants';

class SearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants('location=11354');
  }

  render () {
    return (
      <div>
        <SearchInput fetchRestaurants={this.props.fetchRestaurants}/>
        <SearchIndex loading={this.props.loading} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.yelp.restaurants,
    loading: state.yelp.loading
  }
}

export default connect(mapStateToProps, {fetchRestaurants})(SearchContainer);
