import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowUserPosts.css'


export default function ShowUserPosts(props) {
  const { posts, currentUser, destroyPost } = props;
  console.log(currentUser)

  useEffect(() => {
    getAllUserPosts()
  }, [currentUser])
  const getAllUserPosts = async () => {
    if (currentUser) {
      await props.getUserPosts()
    } else {
      props.clearUserPosts()
    }
  }

  return (
    <body className="post-container">


      <hr />

      <h3>My Job Listings</h3>
      {
        // getAllUserPosts() &&
        posts.map(post => (
          <React.Fragment key={post.id}>
            <p>{post.name}</p>
            <p>{post.location}</p>
            <p>{post.startdate}</p>
            <p>{post.enddate}</p>
            <p>{post.description}</p>
            {

              currentUser && currentUser.id === post.user_id && (
                <>
                  <button>Edit</button>
                  <button onClick={() => destroyPost(post.id)}>Delete</button>
                </>
              )
            }
          </React.Fragment>
        ))
      }
      <br />

      <button>{currentUser && <Link to='/new/post'><div className="create-button">Create</div></Link>}</button>


    </body>
  )
}