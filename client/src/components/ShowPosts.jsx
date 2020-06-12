import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUserPosts } from '../services/posts';

export default function ShowPosts(props) {
  const { posts, currentUser, destroyPost } = props;
  console.log(currentUser)


  const getAllUserPosts = () => {
    if (currentUser) {
      props.getUserPosts()
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
      <Link to='/new/post'><button>Create</button></Link>
    </>
  )
}