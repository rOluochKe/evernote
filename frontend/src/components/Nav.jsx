import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <h1>Evernote Note Taking App</h1>
      <nav>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/auth/signup'>
          <div>Sign Up</div>
        </Link>
        <Link to='/auth/login'>
          <div>Sign In</div>
        </Link>
      </nav>
    </header>
  )
}

export default Nav
