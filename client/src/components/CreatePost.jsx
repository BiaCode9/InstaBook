import React, { Component } from 'react'

export default class CreatePost extends Component {
  state =
    {
      user_id: "",
      name: "",
      location: "",
      description: "",
      startdate: "",
      enddate: "",
    }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {


    const { user_id, name, location, description, startdate, enddate } = this.state;
    const { postPost, history } = this.props;
    return (
      <div className="create-container">
        <form onSubmit={(e) => {

          e.preventDefault();
          postPost(this.state);
          history.push('/posts');
          this.setState({
            user_id: "",
            name: "",
            location: "",
            description: "",
            startdate: "",
            enddate: ""
          })
        }}>

          <div className="post-show-container">

            <hr />


            <h3>Create Post</h3>

            <label htmlFor="title">User:</label>
            <input
              id="id"
              type="text"
              value={user_id}
              name='user_id'
              onChange={this.handleChange}
            />

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
            <label htmlFor="title">Start Date:</label>
            <input
              id="id"
              type="text"
              value={startdate}
              name='startdate'
              onChange={this.handleChange}
            />
            <label htmlFor="title">End Date:</label>
            <input
              id="id"
              type="text"
              value={enddate}
              name='enddate'
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
          </div>
        </form>
      </div>

    )

  }
}
