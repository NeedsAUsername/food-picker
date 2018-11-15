import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {fetchUser} from '../actions/fetchUser.js';

class AuthenticationContainer extends React.Component {

  // sort of like before_action: user_authenticated? in rails
  componentDidMount() {
    this.props.fetchUser()
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
export default connect(mapStateToProps, {fetchUser})(AuthenticationContainer);
