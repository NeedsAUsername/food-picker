import React from 'react';

class Login extends React.Component {
  render () {
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
        <input type="submit" placeholder="submit"/>
      </form>
    )
  }
}

export default Login;
