import React, { Component } from 'react';

class Header extends Component {
  render (){
    return (
      <div>
        <h1>Welcome to My Firebase App</h1>
        <button onClick={event => this.props.loginButtonClicked(event)}>Login</button>{' '}
        <button onClick={event => this.props.logoutButtonClicked(event)}>Logout</button>
      </div>
    )
  }
}

export default Header
