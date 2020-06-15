import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Register.css'



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
        <div className='form-container-signup'>
          <div className="joinus-title">
            <h3>Join Us!</h3>
          </div>
          <label htmlFor="firstname">
            <input className="welcome-input-box"
              id="firstname"
              type="text"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="lastname">
            <input className="welcome-input-box"
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="email">
            <input className="welcome-input-box"
              id="email"
              type="text"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="username">
            <input className="welcome-input-box"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            <input className="welcome-input-box"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button className="signup-button">Welcome</button>
        </div>
      </form>

    )
  }
}
