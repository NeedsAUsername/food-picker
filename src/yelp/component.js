import React from 'react';

class YelpComponent extends React.Component {
  rest = () => this.props.restaurant;

  render () {
    return (
      <div>
        Name: {this.rest().name}
      </div>
    )
  }
}

export default YelpComponent;
