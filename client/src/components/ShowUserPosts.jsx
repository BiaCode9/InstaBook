import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowUserPosts.css'
import Post from './Post'



export default function ShowUserPosts(props) {
  const { posts, currentUser, destroyPost, destroyComment, createComment, history } = props;
  console.log(currentUser)

  useEffect(() => {
    getAllUserPosts()
  }, [currentUser])
  const getAllUserPosts = async () => {
    if (currentUser === null) {
    }
    else if (currentUser) {
      await props.getUserPosts()
    } else {
      props.clearUserPosts()
      history.push('/user/login')
    }
  }

  return (
    <div className="post-container">


      <hr />
      <div className="job-listings">
        <h3>MY JOB LISTINGS:</h3>
      </div>
      {
        // getAllUserPosts() &&
        posts.map(post => (
          <Post currentUser={currentUser} post={post} destroyPost={destroyPost} destroyComment={destroyComment} createComment={createComment} />
        ))
      }
      <br />

      <button className="create-button">{currentUser && <Link className="create" to='/new/post'>Create</Link>}</button>


    </div>
  )
}