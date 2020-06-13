import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


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
    <>
      <hr />
      <h3>Posts</h3>
      {
        // getAllUserPosts() &&
        posts.map(post => (
          <React.Fragment key={post.id}>
            <p>{post.name}</p>
            <p>{post.location}</p>
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
      {currentUser && <Link to='/new/post'>Create</Link>}
    </>
  )
}