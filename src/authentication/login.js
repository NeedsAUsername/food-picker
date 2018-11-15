import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/login';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  }
  render () {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="username" value={this.state.username}
            onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={this.state.password}
            onChange={this.handleChange}/>
          <input type="submit" placeholder="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {login})(Login);
