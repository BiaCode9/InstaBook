import React, { PureComponent } from 'react'
// import EditPost from './EditPost'
import { Link } from 'react-router-dom';
import './Post.css'
import Comment from './Comment';


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

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log("here")
    let id = this.props.post.id
    await this.props.createComment(id, this.state.description)
    this.setState({ description: "" })
  }
  destroyCommentHelper = async (id, postId) => {
    await this.props.destroyComment(id, postId)
    this.setState({ description: "" })
  }
  render() {
    const {
      post, destroyPost, destroyComment, currentUser

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

          <p><div className="contact">CONTACT INFO:</div><div className="contact-entry">{post.contact}</div></p>

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
              <Comment currentUser={currentUser} comment={comment} destroyComment={this.destroyCommentHelper} />
            ))}

            <div className="comment-box">
              <form onSubmit={this.handleSubmit}>
                <textarea className="comment" name="comment" value={this.state.description} placeholder="write your comment here"
                  onChange={this.handleChange}
                />
                <button className="save-button">Submit</button>

              </form>
            </div>
          </div>
        </div>
      </React.Fragment>



    )


  }
}

export default Post