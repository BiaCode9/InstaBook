import React, { Component } from 'react'
import { getPost, updatePost } from "../services/posts";
import './EditPost.css'

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {

      name: "",
      location: "",
      description: "",
      startdate: "",
      enddate: "",
      contact: "",

    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    this.setState({ ...this.props.post })
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.post)
    if (prevProps.post !== this.props.post) {
      console.log("here")
      this.setState({ ...this.props.post })
    }
  }

  render() {


    const { name, location, description, startdate, enddate, contact } = this.state;
    const { editPost, history } = this.props;
    return (

      <form className="create-container" onSubmit={(e) => {

        e.preventDefault();
        editPost(this.props.post.id, this.state);
        history.push('/myposts');
        this.setState({
          name: "",
          location: "",
          description: "",
          startdate: "",
          enddate: "",
          contact: "",
        })
      }}>

        <hr />
        <div className="create-post">
          <h3>EDIT POST:</h3>
        </div>

        {/* <label htmlFor="title"></label>
        <input
          id="id"
          type="text"
          value={user_id}
          name='user_id'
          onChange={this.handleChange}
        /> */}

        <label htmlFor="title"><div className="position">Position:</div></label>
        <input className="input-box"
          id="id"
          type="text"
          value={name}
          name='name'
          onChange={this.handleChange}
        />
        <label htmlFor="title"><div className="location">Location:</div></label>
        <input className="input-box"
          id="id"
          type="text"
          value={location}
          name='location'
          onChange={this.handleChange}
        />
        <label htmlFor="title"><div className="start-date">Start Date:</div></label>
        <input className="input-box"
          id="id"
          type="text"
          value={startdate}
          name='startdate'
          onChange={this.handleChange}
        />
        <label htmlFor="title"><div className="end-date">End Date:</div></label>
        <input className="input-box"
          id="id"
          type="text"
          value={enddate}
          name='enddate'
          onChange={this.handleChange}
        />
        <label htmlFor="title"><div className="contact">Contact Info:</div></label>
        <input className="input-box"
          id="id"
          type="text"
          value={contact}
          name='contact'
          onChange={this.handleChange}
        />


        <label htmlFor="post"><div className="end-date">Job Description:</div></label>
        <textarea
          className="textarea-description"
          rows={10}
          placeholder='Description'
          value={description}
          name='description'
          required
          onChange={this.handleChange}
        />
        <button className="submit-button">Submit</button>
      </form>

    )
  }
}


export default EditPost