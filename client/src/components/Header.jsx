import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1>InstaBook</h1>

      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/user/login'>Login/Register</Link>
      }

      <Link to='/user/register'>Sign Up</Link>
    </div>
  )
}
