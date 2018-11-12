import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={this.state.username}
          onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={this.state.password}
          onChange={this.handleChange}/>
        <input type="submit" placeholder="submit"/>
      </form>
    )
  }
}

export default Login;
