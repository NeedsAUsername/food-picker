import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import SignUp from './signup';
import {fetchUser} from '../actions/fetchUser.js';
import {logout} from '../actions/user/logout.js';

class AuthenticationContainer extends React.Component {

  // sort of like before_action: user_authenticated? in rails
  componentDidMount() {
    this.props.fetchUser()
  }
  renderContent = () => {
    if(this.props.authenticated){
     return (
        <React.Fragment>
         <h1> Welcome {this.props.email} </h1>
         <button onClick={this.props.logout}>Logout</button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Login />
          <SignUp />
        </React.Fragment>)
    }
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
    email: store.user.email,
    authenticated: store.user.authenticated
  }
}
export default connect(mapStateToProps, {fetchUser, logout})(AuthenticationContainer);
