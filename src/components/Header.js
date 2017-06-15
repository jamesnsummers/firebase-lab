import React, { Component } from 'react';

class Header extends Component {
  render (){
    return (
      <div>
        <h3>Welcome to My Firebase App</h3>
        {this.props.currentUser !=null ? <h2>Hello {this.props.currentUser.displayName}</h2> : <h1>You're a stranger.</h1>}
        <button onClick={event => this.props.loginButtonClicked(event)}>Login</button>{' '}
        <button onClick={event => this.props.logoutButtonClicked(event)}>Logout</button>
      </div>
    )
  }
}

export default Header
