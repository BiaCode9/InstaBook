import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllPosts, createPost, deletePost, getAllUserPosts } from '../services/posts';
import ShowPosts from './ShowPosts';
import ShowUserPosts from './ShowUserPosts';
import CreatePost from './CreatePost';


export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      userPosts: []
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  clearUserPosts = () => {
    this.setState({ userPosts: [] })
  }


  getPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  }


  getUserPosts = async () => {
    const userPosts = await getAllUserPosts(this.props.currentUser.id);
    this.setState({ userPosts });
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
        <Route path='/myposts' render={() => (

          <ShowUserPosts
            posts={this.state.userPosts}
            currentUser={this.props.currentUser}
            destroyPost={this.destroyPost}
            getUserPosts={this.getUserPosts}
            clearUserPosts={this.clearUserPosts}
          />

        )} />

        <Route path='/allposts' render={() => (

          <ShowPosts
            posts={this.state.posts}
            currentUser={this.props.currentUser}
            destroyPost={this.destroyPost}
            getPosts={this.getPosts}
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
