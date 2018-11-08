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
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="location">Location</label>
        <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} required/>
        <label for="price">Price</label>
        <select onChange={this.handleChange} id="price" value={this.state.price} name="price">
          <option value="">Any price is ok!</option>
          <option value="1">Cheap</option>
          <option value="2">Standard</option>
          <option value="3">Treat</option>
          <option value="4">Splurge</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default YelpInput;
