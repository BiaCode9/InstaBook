import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  return (
    <div className="header">
      <div className="instabook-logo">
        <img src="https://i.imgur.com/HxMMOy3.png" alt="instabook-logo" />
        {/* <h1>InstaBook</h1> */}
      </div>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button className="logout-button" onClick={props.handleLogout}>Logout</button></>
          :
          <>
            <nav>
              <div className="signin">
                <Link to='/user/login'>Sign In</Link>
              </div>
              <div className="signup">
                <Link to='/user/register'>Sign Up</Link>
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
