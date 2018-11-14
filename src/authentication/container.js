import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {checkUser} from '../actions/checkUser.js';

class AuthenticationContainer extends React.Component {

  render () {
    return (
      <div>
        {this.props.authenticated ? 'You are logged in' : <Login />}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    authenticated: store.user.authenticated
  }
}
export default connect(mapStateToProps, {checkUser})(AuthenticationContainer);
