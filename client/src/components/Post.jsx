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
        <p>User: {post.user.username}</p>
        <p>Job Position: {post.name}</p>
        <p>Location: {post.location}</p>
        <p>Start Date: {post.startdate}</p>
        <p>End Date: {post.enddate}</p>
        <p>Description: {post.description}</p>
        {
          currentUser && currentUser.id === post.user_id && (
            <>
              <div className="edit-delete">
                <button>{currentUser && <Link to='/edit/post/'><div className="edit-button">Edit</div></Link>}</button>
                <button onClick={() => destroyPost(post.id)}>Delete</button>
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