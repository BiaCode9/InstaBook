import React from 'react'
import './Comment.css'

export default function Comment({ comment, destroyComment, currentUser }) {
  return (
    <p>
      <div className="comments">
        <div className="user-comment">
          {comment.user.username}
        </div>
        <div className="comment-description">
          {comment.description}
        </div>
        {comment.user.id === currentUser.id &&
          <button className="delete-button-comment" onClick={() => destroyComment(comment.id, comment.post_id)}>Delete</button>
        }


      </div>


    </p>



    //   <button className="delete-button" onClick={() => destroyPost(post.id)}>Delete</button>
  )
}
