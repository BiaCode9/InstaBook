import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllPosts, createFood } from '../services/posts';
import ShowPosts from './ShowPosts';
import CreatePost from './CreatePost';

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
        <Route path='/posts' render={() => (

          <ShowPosts
            posts={this.state.posts}

          />

        )} />

        <Route path='/new/post' render={(props) => (
          <CreatePost
            {...props}
            postPost={this.postPost}
          />
        )} />


      </main>
    )
  }
}
