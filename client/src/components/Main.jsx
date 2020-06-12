import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllPosts } from '../services/posts';

export default class Main extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.getPosts();
  }


  getPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  }




  render() {
    return (
      <main>
        <Route path='/user/login' render={(props) => (

          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />



        )} />

        <Route path='/user/register' render={(props) => (

          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />

        )} />


      </main>
    )
  }
}
