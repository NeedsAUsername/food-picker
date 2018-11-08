import React from 'react';

class YelpInput extends React.Component {
  state = {
    location: '11354',
    price: ''
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
    this.setState({
      location: '',
      price: ''
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="location">Location</label>
        <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} required/>
        <label for="price">Price(1-4)</label>
        <input type="number" id="price" name="price" onChange={this.handleChange} value={this.state.price} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default YelpInput;
