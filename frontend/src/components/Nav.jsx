import React from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from '../AppState.jsx'

const Nav = (props) => {
  const { state, dispatch } = useAppState()

  return (
    <header>
      <h1>Evernote Note Taking App</h1>
      <nav>
        {!state.token ? (
          <>
            <Link to='/'>
              <div>Home</div>
            </Link>
            <Link to='/auth/signup'>
              <div>Sign Up</div>
            </Link>
            <Link to='/auth/login'>
              <div>Sign In</div>
            </Link>
          </>
        ) : null}
        {state.token ? (
          <div
            onClick={() => {
              dispatch({ type: 'logout' })
              props.history.push('/')
            }}
          >
            Logout
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Nav
