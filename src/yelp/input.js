import React from 'react';

class YelpInput extends React.Component {
  state = {
    location: '11354',
    price: '2'
  }
  render () {
    return (
      <form>
        <input type="text" value={this.state.location} />
        <input type="number" value={this.state.price} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default YelpInput;
