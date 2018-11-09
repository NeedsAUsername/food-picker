import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component {
  current = () => ({
    border: 'solid'
  })
  handleClick = () => {
    console.log('emptying...')
    this.props.emptyRestaurants()
  }
  render () {
    return (
      <nav>
        <h1>Food Picker</h1>
        <NavLink to="/" exact activeStyle={this.current()} onClick={this.handleClick}>Search</NavLink>
        <NavLink to="/random" exact activeStyle={this.current()} onClick={this.handleClick}>Randomize</NavLink>
      </nav>
    )
  }
}

export default Navbar;
