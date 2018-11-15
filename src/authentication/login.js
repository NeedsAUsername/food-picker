import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/user/login';
import AuthenticationInput from './input';

class Login extends React.Component {
  render () {
    return (
      <div>
        <h1> Login </h1>
        <AuthenticationInput formAction={this.props.login}/>
      </div>
    )
  }
}

export default connect(null, {login})(Login);
