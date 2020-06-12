import React, { Component } from 'react'

export default class CreatePost extends Component {
  state =
    {
      name: "",
      location: "",
      description: ""
    }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { description, location, name } = this.state;
    const { postPost, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        postPost(this.state);
        history.push('/posts');
        this.setState({
          description: "",
          location: "",
          name: ""
        })
      }}>
        <hr />
        <h3>Create Post</h3>
        <label htmlFor="title">Job Title:</label>
        <input
          id="id"
          type="text"
          value={name}
          name='name'
          onChange={this.handleChange}
        />
        <label htmlFor="title">Location:</label>
        <input
          id="id"
          type="text"
          value={location}
          name='location'
          onChange={this.handleChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          className="textarea-description"
          rows={10}
          placeholder='Description'
          value={description}
          name='description'
          required
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
