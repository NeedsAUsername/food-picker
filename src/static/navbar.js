import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component {
  current = () => ({
    border: 'solid'
  })
  render () {
    return (
      <nav>
        <h1>Food Picker</h1>
        <NavLink to="/" exact activeStyle={this.current()}>Search</NavLink>
        <NavLink to="/random" exact activeStyle={this.current()}>Randomize</NavLink>
      </nav>
    )
  }
}

export default Navbar;
