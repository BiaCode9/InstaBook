import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { registerUser, loginUser, removeToken } from './services/auth'


export default class App extends Component {

  state = {

    currentUser: null

  }

  handleRegisterSubmit = async (data) => {
    const currentUser = await registerUser(data);
    this.setState({ currentUser });
  }

  handleLoginSubmit = async (data) => {
    const currentUser = await loginUser(data);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear();
    removeToken();

  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }


  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}

        />
        <Main
          handleRegisterSubmit={this.handleRegisterSubmit}
          handleLoginSubmit={this.handleLoginSubmit}
        />
      </div>
    )
  }
}
