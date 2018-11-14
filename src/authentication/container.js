import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {checkUser} from '../actions/checkUser.js';

class AuthenticationContainer extends React.Component {

  handleCheck = (event) => {
    checkUser().then(user => console.log(user))
  }

  render () {
    return (
      <div>
        <Login />
        <button onClick={this.handleCheck}>Check</button>
      </div>
    )
  }
}

export default connect(null, {checkUser})(AuthenticationContainer);
