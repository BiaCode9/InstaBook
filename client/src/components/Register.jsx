import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { firstname, lastname, email, username, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegisterSubmit(this.state);
        history.push('/');
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          username: "",
          password: ""
        })
      }}>
        <h3>Sign Up</h3>

        <label htmlFor="firstname">First Name:
          <input
            id="firstname"
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="lastname">Last Name:
          <input
            id="lastname"
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">E-mail:
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="username">Create Username:
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">Create Password:
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    )
  }
}
