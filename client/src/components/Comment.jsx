import React from 'react'

export default function Comment({ comment }) {
  return (
    <p>
      {comment.description}
      {comment.user.username}
    </p>
  )
}
