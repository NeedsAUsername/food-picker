import React from 'react';

class AuthenticationInput extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.formAction(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="username" value={this.state.email}
          onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={this.state.password}
          onChange={this.handleChange}/>
        <input type="submit" placeholder="submit"/>
      </form>
    )
  }
}



export default AuthenticationInput;
