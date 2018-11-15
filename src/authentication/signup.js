import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../actions/signup';
import AuthenticationInput from './input';

class Signup extends React.Component {
  render () {
    return (
      <div>
        <h1> SignUp </h1>
        <AuthenticationInput formAction={this.props.signup}/>
      </div>
    )
  }
}

export default connect(null, {signup})(Signup);
