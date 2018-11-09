import React from 'react';
import {connect} from 'react-redux';
import {randomizeRestaurant} from '../actions/randomizeRestaurant';

class Randomizer extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.randomizeRestaurant();
  }
  render () {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Tell Me Where</button>
      </div>
    )
  }
}

export default connect(null, {randomizeRestaurant})(Randomizer);
