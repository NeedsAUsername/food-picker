import React from 'react';
import {connect} from 'react-redux';

class UserContainer extends React.Component {
  render () {
    return (
      <div>
        User Container
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurants: store.user.restuarants
  }
}

export default connect(mapStateToProps)(UserContainer);
