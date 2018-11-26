import React from 'react';

class SearchInput extends React.Component {
  state = {
    location: '',
    price: '',
    hot: '',
    category: 'none'
  }
  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const params = `location=${this.state.location}&price=${this.state.price}&attributes=${this.state.hot}&categories=${this.state.category}`;
    this.props.fetchRestaurants(params);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} required/>
        <label htmlFor="price">Price</label>
        <select onChange={this.handleChange} id="price" value={this.state.price} name="price">
          <option value="">Any</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <label htmlFor="category">Categories</label>
        <select onChange={this.handleChange} id="category" name="category" value={this.state.category}>
          <option value="none">All</option>
          <option value="tradamerican">American</option>
          <option value="chinese">Chinese</option>
          <option value="hotdogs">Fast Food</option>
          <option value="french">French</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="spanish">Spanish</option>
          <option value="vegetarian">Vegetarian</option>
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
