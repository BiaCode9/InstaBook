import React, { PureComponent } from 'react'
// import EditPost from './EditPost'
import { Link } from 'react-router-dom';
import './Post.css'


class Post extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      description: ""

    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ description: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("here")
    let id = this.props.post.id
    this.props.createComment(id, this.state.description)

  }

  render() {
    const {
      post, destroyPost, currentUser

    } = this.props
    return (



      <React.Fragment key={post.id}>

        <div className="single-post-container">

          <p><div className="user"></div><div className="user-entry">
            {post.user && post.user.username}</div></p>


          <p><div className="position">POSITION:</div><div className="job-entry">{post.name}</div></p>


          <p><div className="location">LOCATION:</div><div className="location-entry">{post.location}</div></p>


          <p><div className="start-date">START DATE:</div><div className="start-date-entry">{post.startdate}</div></p>


          <p><div className="end-date">END DATE:</div><div className="end-date-entry">{post.enddate}</div></p>


          <p><div className="description">DESCRIPTION:</div><div className="description-entry">{post.description}</div></p>

          {
            currentUser && currentUser.id === post.user_id && (
              <>
                <div className="edit-delete">
                  <button className="edit-button">{currentUser && <Link className="edit-link" to={`/edit/post/${post.id}`}>Edit</Link>}</button>
                  <button className="delete-button" onClick={() => destroyPost(post.id)}>Delete</button>
                </div>
              </>
            )
          }



          <div className="comments-container">
            <div className="comment-title">
              <h2>Comments:</h2>
            </div>
            {post.comments && post.comments.map(comment => (
              <p>{comment.description}</p>
            ))}

            <div className="comment-box">
              <form onSubmit={this.handleSubmit}>
                <textarea className="comment" name="comment" value={this.state.description} placeholder="write your comment here"
                  onChange={this.handleChange}
                />
                <button className="save-button">Save</button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>



    )


  }
}

export default Post