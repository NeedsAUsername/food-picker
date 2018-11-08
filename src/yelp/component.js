import React from 'react';

class YelpComponent extends React.Component {
  render () {
    return (
      <div>
        Name: {this.props.name}
      </div>
    )
  }
}

export default YelpComponent;
