import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import SignUp from './signup';
import {fetchUser} from '../actions/fetchUser.js';
import {logout} from '../actions/logout.js';

class AuthenticationContainer extends React.Component {

  // sort of like before_action: user_authenticated? in rails
  componentDidMount() {
    this.props.fetchUser()
  }
  renderContent = () => {
    return this.props.authenticated ? <button onClick={this.props.logout}>Logout</button> :
    <React.Fragment><Login /><SignUp /></React.Fragment>
  }

  render () {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    authenticated: store.user.authenticated
  }
}
export default connect(mapStateToProps, {fetchUser, logout})(AuthenticationContainer);
