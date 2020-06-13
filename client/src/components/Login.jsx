import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Login.css'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLoginSubmit(this.state);
        history.push('/');
        this.setState({
          username: "",
          password: ""
        })
      }}>
        <div className='form-container-login'>
          <div className="login-title">
            <h3>Welcome Back!</h3>
          </div>
          <label htmlFor="username">User Name:
          <input
              id="username"
              type="text"
              name="username"
              value={username}
              placeholder="JonnyDoe"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">Password:
          <input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="123456"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <div className="login-button">
            <button>Login to InstaBook </button>
          </div>
        </div>
      </form>
    )
  }
}
