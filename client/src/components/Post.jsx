import React, { PureComponent } from 'react'

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
        <p>Name: {post.name}</p>
        <p>Location: {post.location}</p>
        <p>Start Date: {post.startdate}</p>
        <p>End Date: {post.enddate}</p>
        <p>Description: {post.description}</p>
        {
          currentUser && currentUser.id === post.user_id && (
            <>
              <div className="edit-delete">
                <button>Edit</button>
                <button onClick={() => destroyPost(post.id)}>Delete</button>
              </div>
            </>
          )
        }
        {post.comments.map(comment => (
          <p>{comment.description}</p>
        ))}

        <textarea name="comment" value={this.state.comment} placeholder="write your comment here"
          onChange={this.handleChange}
        />
      </React.Fragment>


    )
  }
}

export default Post