import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <h1>InstaBook</h1>

      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/user/login'>Sign In</Link>
      }

      <Link to='/user/register'>Sign Up</Link>


    </div>
  )
}
