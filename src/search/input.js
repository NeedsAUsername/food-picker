import React from 'react';

class SearchInput extends React.Component {
  state = {
    location: '11354',
    price: '',
    hot: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const params = `location=${this.state.location}&price=${this.state.price}&attributes=${this.state.hot}`;
    this.props.fetchRestaurants(params);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} required/>
        <label htmlFor="price">Price</label>
        <select onChange={this.handleChange} id="price" value={this.state.price} name="price">
          <option value="">Any price is ok!</option>
          <option value="1">Cheap</option>
          <option value="2">Standard</option>
          <option value="3">Treat</option>
          <option value="4">Splurge</option>
        </select>
        <label htmlFor="hot">Only want new restaurants?</label>
        <select onChange={this.handleChange} id="hot" name="hot" value={this.state.hot}>
          <option value="">No</option>
          <option value="hot_and_new">Sure</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchInput;
