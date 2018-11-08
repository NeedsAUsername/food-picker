import React from 'react';

class YelpComponent extends React.Component {

  render () {
    const rest = this.props.restaurant;
    return (
      <div>
        <a href={rest.url} target="_blank">{rest.name}</a>
      </div>
    )
  }
}

export default YelpComponent;
