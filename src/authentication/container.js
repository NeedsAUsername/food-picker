import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {checkUser} from '../actions/checkUser.js';

class AuthenticationContainer extends React.Component {

  // sort of like before_action: user_authenticated? in rails
  componentDidMount() {
    this.props.checkUser()
  }
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
