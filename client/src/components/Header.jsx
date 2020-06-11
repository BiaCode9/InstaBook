import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1>InstaBook</h1>
      <Link to='/user/login'>Sign In</Link>
      <Link to='/user/register'>Sign Up</Link>
    </div>
  )
}
