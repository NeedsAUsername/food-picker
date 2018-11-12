import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  render () {
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <input type="submit" placeholder="submit"/>
      </form>
    )
  }
}

export default Login;
