import React from 'react';

class YelpInput extends React.Component {
  state = {
    location: '11354',
    price: '2'
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const params = `location=${this.state.location}&price=${this.state.price}`;
    this.props.fetchRestaurants(params);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="location" onChange={this.handleChange} value={this.state.location} />
        <input type="number" name="price" onChange={this.handleChange} value={this.state.price} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default YelpInput;
