import React from 'react';

class SearchInput extends React.Component {
  state = {
    location: '11354',
    price: '',
    hot: '',
    category: 'none'
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
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
        <label htmlFor="cuisine">Categories</label>
        <select onChange={this.handleChange} id="category" name="category" value={this.state.category}>
          <option value="none">Any</option>
          <option value="hotdogs">Fast Food</option>
          <option value="tradamerican">American</option>
          <option value="italian">Italian</option>
          <option value="french">French</option>
          <option value="chinese">Chinese</option>
          <option value="mexican">Mexican</option>
          <option value="spanish">Spanish</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchInput;
