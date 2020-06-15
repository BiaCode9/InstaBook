import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  return (
    <div className="header">
      <div className="instabook-logo">
        <img src="https://i.imgur.com/HxMMOy3.png" alt="instabook-logo" />
      </div>
      {
        props.currentUser
          ?
          <><div className="current-user-name">Welcome, {props.currentUser.username}</div><button className="logout-button" onClick={props.handleLogout}>Logout</button></>
          :
          <>
            <nav>

              <div className="signin-signup-container">
                <div className="signin">
                  <Link to='/user/login'>Sign In</Link>
                </div>
                <div className="signup">
                  <Link to='/user/register'>Sign Up</Link>
                </div>
              </div>

            </nav>

          </>
      }
      <hr />
      {
        props.currentUser && (
          <nav>
            <div className="myposts-link">
              <NavLink to="/myposts">My Posts</NavLink>
            </div>
            <div className="allposts-link">
              <NavLink to="/allposts">All Posts</NavLink>
            </div>
          </nav>
        )
      }
    </div >
  )
}
