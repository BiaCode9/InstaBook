import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  return (
    <div className="header">
      <div className="instabook-logo">
        <img src="https://i.imgur.com/Jhcwr3L.png" alt="instabook-logo" />
        <h1>InstaBook</h1>
      </div>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <>
            <div className="signin-signup">
              <div className="signin">
                <Link to='/user/login'>Sign In</Link>
              </div>
              <div className="signup">
                <Link to='/user/register'>Sign Up</Link>
              </div>
            </div>
          </>
      }
      <hr />
      {
        props.currentUser && (
          <nav>
            <NavLink to="/myposts">My Posts</NavLink>
            <NavLink to="/allposts">All Posts</NavLink>
          </nav>
        )
      }
    </div>
  )
}
