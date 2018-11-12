import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component {
  current = () => ({
    border: 'solid'
  })
  handleClick = () => {
    this.props.emptyRestaurants()
  }
  renderNavLinks = () => {
    return this.props.routes.map((route, index) => <NavLink key={index} to={route.path} exact activeStyle={this.current()} onClick={this.handleClick}>{route.name}</NavLink>);
  }
  render () {
    return (
      <nav>
        <h1>Food Picker</h1>
        {this.renderNavLinks()}
      </nav>
    )
  }
}

export default Navbar;
