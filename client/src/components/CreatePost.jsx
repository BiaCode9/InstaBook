import React, { Component } from 'react'

export default class CreatePost extends Component {
  state = {
    post: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      post: value
    })
  }

  render() {
    const { post } = this.state;
    const { postPost, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        postPost(this.state);
        history.push('/posts');
        this.setState({
          post: ""
        })
      }}>
        <hr />
        <h3>Create Post</h3>
        <label htmlFor="title">Job Title:</label>
        <input
          id="id"
          type="text"
          value={post}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Location:</label>
        <input
          id="id"
          type="text"
          value={post}
          onChange={this.handleChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          className="textarea-description"
          rows={10}
          placeholder='Description'
          value={post}
          name='description'
          required
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
