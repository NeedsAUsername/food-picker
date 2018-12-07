import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import Login from './login';
import SignUp from './signup';
import {logout} from '../actions/user/logout.js';

class AuthenticationContainer extends React.Component {

  renderContent = () => {
    if(this.props.authenticated){
     return (
        <div className="readable">
         <h1> Welcome {this.props.email} </h1>
         <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else if (this.props.loading) {
      return (
        <Spinner name="circle" color="blue" fadeIn="none"/>
      )
    } else {
      return (
        <div className="readable">
          <Login />
          <SignUp />
        </div>)
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
    authenticated: store.user.authenticated,
    loading: store.user.logging_in || store.user.logging_out || store.user.signing_up
  }
}
export default connect(mapStateToProps, {logout})(AuthenticationContainer);
