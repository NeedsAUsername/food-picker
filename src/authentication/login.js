import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import {checkUser} from '../actions/checkUser.js';

class Login extends React.Component {
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
    this.props.login(this.state);
  }
  handleCheck = (event) => {
    event.preventDefault();
    checkUser();
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="username" value={this.state.username}
            onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={this.state.password}
            onChange={this.handleChange}/>
          <input type="submit" placeholder="submit"/>
        </form>

        <button onClick={this.handleCheck}>Check</button>
      </div>
    )
  }
}

export default connect(null, {login})(Login);
