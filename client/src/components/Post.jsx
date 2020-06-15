import React, { PureComponent } from 'react'
import EditPost from './EditPost'
import { Link } from 'react-router-dom';
import './Post.css'


class Post extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      comment: ""

    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const {
      post, destroyPost, currentUser

    } = this.props
    return (

      <React.Fragment key={post.id}>

        <p><div className="user">User:</div>{post.user.username}</p>


        <p><div className="job-position">Job Position:</div> {post.name}</p>


        <p><div className="location">Location:</div>{post.location}</p>


        <p><div className="start-date">Start Date:</div>{post.startdate}</p>


        <p><div className="end-date">End Date:</div>{post.enddate}</p>


        <p> <div className="description">Description:</div>{post.description}</p>

        {
          currentUser && currentUser.id === post.user_id && (
            <>
              <div className="edit-delete">
                <button className="edit-button">{currentUser && <Link to='/edit/post/'>Edit</Link>}</button>
                <button className="delete-button" onClick={() => destroyPost(post.id)}>Delete</button>
              </div>
            </>
          )
        }






        {post.comments.map(comment => (
          <p>{comment.description}</p>
        ))}
        <div className="comment-box">
          <textarea name="comment" value={this.state.comment} placeholder="write your comment here"
            onChange={this.handleChange}
          />
        </div>
      </React.Fragment>
      // </div>


    )
  }
}

export default Post