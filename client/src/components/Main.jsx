import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllPosts, createPost, deletePost, getAllUserPosts } from '../services/posts';
import ShowPosts from './ShowPosts';
import CreatePost from './CreatePost';


export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.getPosts();
  }


  getPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  }


  getUserPosts = async () => {
    const posts = await getAllUserPosts(this.props.currentUser.id);
    this.setState({ posts });
  }

  postPost = async (postData) => {
    const newPost = await createPost(postData);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  destroyPost = async (id) => {
    await deletePost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
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
            currentUser={this.props.currentUser}
            destroyPost={this.destroyPost}
          // getUserPosts={this.getUserPosts}
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
