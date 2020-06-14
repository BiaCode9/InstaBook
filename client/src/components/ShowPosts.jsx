import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowPosts.css'
import Post from './Post'




export default function ShowPosts(props) {
  const { posts, currentUser, destroyPost } = props;
  console.log(currentUser)

  useEffect(() => {
    getPosts()
  }, [])
  const getPosts = async () => {

    await props.getPosts()

  }

  return (
    <div className="post-show-container">

      <hr />
      <h3>JOB POSITIONS NEEDED !</h3>
      {
        // getAllUserPosts() &&
        posts.map(post => (
          <Post currentUser={currentUser} post={post} destroyPost={destroyPost} />
        ))
      }
      <br />
      {currentUser && <Link to='/new/post'><button>Create</button></Link>}

    </div>
  )
}