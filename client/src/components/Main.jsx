import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { createComment, deleteComment, updateComment } from '../services/comments';
import { getAllPosts, createPost, deletePost, updatePost, getAllUserPosts } from '../services/posts';
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
    if (this.props.currentUser === null) return;
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
    console.log(id)
    await deletePost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
  }

  destroyUserComment = async (id, postId) => {
    console.log(id)
    await deleteComment(id, postId);
    this.setState(prevState => ({
      posts: prevState.posts.map(p => {
        p.comments = p.comments.filter((c) => c.id !== id);
        return p
      }),
      userPosts: prevState.userPosts.map(p => {
        p.comments = p.comments.filter((c) => c.id !== id);
        return p
      }),
    }))
  }

  destroyUserPost = async (id) => {
    console.log(id)
    await deletePost(id);
    this.setState(prevState => ({
      userPosts: prevState.userPosts.filter(post => post.id !== id)
    }))
  }


  editPost = async (id, postData) => {
    const post = await updatePost(id, postData);
    console.log(post.id)
    this.setState(prevState => ({
      userPosts: prevState.userPosts.map(p =>
        p.id === id ? post : p)
    }))
  }


  createNewComment = async (id, commentData) => {
    const comment = await createComment(id, commentData);
    console.log(comment)
    this.setState(prevState => ({
      posts: prevState.posts.map(p => {
        if (p.id === id) {
          p.comments.push(comment)
          return p
        }
        else {
          return p
        }

      }),
      userPosts: prevState.userPosts.map(p => {
        if (p.id === id) {
          p.comments.push(comment)
          return p
        }
        else {
          return p
        }

      }),
    }))
  }



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
        <Route path='/myposts' render={(props) => (

          <ShowUserPosts
            {...props}
            posts={this.state.userPosts}
            currentUser={this.props.currentUser}
            destroyPost={this.destroyUserPost}
            getUserPosts={this.getUserPosts}
            clearUserPosts={this.clearUserPosts}
            createComment={this.createNewComment}
            destroyComment={this.destroyUserComment}
          />
        )} />

        <Route path='/allposts' render={() => (

          <ShowPosts
            posts={this.state.posts}
            currentUser={this.props.currentUser}
            destroyPost={this.destroyPost}
            getPosts={this.getPosts}
            createComment={this.createNewComment}
            destroyComment={this.destroyUserComment}
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
            editPost={this.editPost}
          />
        )} />


      </main>
    )
  }
}


