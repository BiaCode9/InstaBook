import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllPosts, createPost, deletePost, getAllUserPosts } from '../services/posts';
import ShowPosts from './ShowPosts';
import ShowUserPosts from './ShowUserPosts';
import CreatePost from './CreatePost';
import EditPost from './EditPost';



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

  // editPost = async (postData) => {
  //   const editPost = await editPost(postData);
  //   this.setState(prevState => ({
  //     posts: [...prevState.posts, editPost]
  //   }))
  // }



  // createComment = async(post.id) => {
  //   const newComment = await createComment(post.id);
  //   this.setState(prevState.posts.map((posts) => {
  //     post.comments.push(newComment);
  //     return 
  //   }


  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getUserPosts()
    }
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

        <Route path='/edit/post/:post_id' render={(props) => (
          <EditPost
            {...props}
            post={this.state.userPosts.find((post) => {
              return parseInt(props.match.params.post_id) === post.id
            })}
            putPost={this.putPost}
          />
        )} />


      </main>
    )
  }
}


