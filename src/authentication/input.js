import React from 'react';

class AuthenticationInput extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
    this.props.formAction(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <label>Email</label>
        <input type="text" name="email" value={this.state.email}
          onChange={this.handleChange}/>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password}
          onChange={this.handleChange}/>
        <input type="submit" placeholder="submit"/>
      </form>
    )
  }
}



export default AuthenticationInput;
