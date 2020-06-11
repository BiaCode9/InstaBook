import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { registerUser } from './services/auth'


export default class App extends Component {

  state = {

    user: null

  }

  handleRegisterSubmit = async (data) => {
    const user = await registerUser(data);
    this.setState({ user });
  }






  render() {
    return (
      <div>
        <Header />
        <Main
          handleRegisterSubmit={this.handleRegisterSubmit}
        />
      </div>
    )
  }
}
