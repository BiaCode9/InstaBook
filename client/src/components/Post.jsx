import React, { PureComponent } from 'react'
// import EditPost from './EditPost'
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

        <p><div className="user"></div><div className="user-entry">
          {post.user.username}</div></p>


        <p><div className="position">POSITION:</div><div className="job-entry">{post.name}</div></p>


        <p><div className="location">LOCATION:</div><div className="location-entry">{post.location}</div></p>


        <p><div className="start-date">START DATE:</div><div className="start-date-entry">{post.startdate}</div></p>


        <p><div className="end-date">END DATE:</div><div className="end-date-entry">{post.enddate}</div></p>


        <p><div className="description">DESCRIPTION:</div><div className="description-entry">{post.description}</div></p>

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