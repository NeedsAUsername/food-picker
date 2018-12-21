import React from 'react';

class RandomizerInput extends React.Component {
  state = {
    location: '',
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.randomizeRestaurant(this.state.location);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <label htmlFor="location">Where Are You?</label>
        <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} placeholder="zipcode or address" required/>
        <input type="submit" value="Discover A Restaurant!" />
      </form>
    )
  }
}

export default RandomizerInput;
