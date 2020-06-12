import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowPosts(props) {
  const { posts, currentUser, destroyPost } = props;
  return (
    <>
      <hr />
      <h3>Posts</h3>
      {
        posts.map(post => (
          <React.Fragment key={post.id}>
            <p>{post.name}</p>
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