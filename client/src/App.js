import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { registerUser } from './services/auth'
import { loginUser } from './services/auth'


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




  render() {
    return (
      <div>
        <Header
          user={this.state.currentUser}


        />
        <Main
          handleRegisterSubmit={this.handleRegisterSubmit}
          handleLoginSubmit={this.handleLoginSubmit}
        />
      </div>
    )
  }
}
