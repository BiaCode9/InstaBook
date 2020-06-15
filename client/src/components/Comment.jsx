import React from 'react'
import './Comment.css'

export default function Comment({ comment }) {
  return (
    <p>
      <div className="comments">
        <div className="user-comment">
          {comment.user.username}
        </div>
        <div className="comment-description">
          {comment.description}
        </div>
      </div>

    </p>



    //   <button className="delete-button" onClick={() => destroyPost(post.id)}>Delete</button>
  )
}
