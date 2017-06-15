import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebase, auth } from './utils/firebase';
import Header from './components/Header.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = ({
      currentUser: null
    })
  }

  loginButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log in
    console.log("signing in")
  }

  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
