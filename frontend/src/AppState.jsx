import React, { useContext, useReducer } from 'react'

// initial state
const initialState = {
  url: 'https://evernoteapp-ror-r-api.herokuapp.com',
  token: null,
  username: null,
  notes: null,
  new: {
    title: '',
    body: '',
  },
  edit: {
    id: 0,
    title: '',
    body: '',
  },
}

// reducer
const reducer = (state, action) => {
  let newState

  switch (action.type) {
    case 'auth':
      newState = { ...state, ...action.payload }
      return newState
      break
    case 'logout':
      newState = { ...state, token: null, username: null }
      window.localStorage.removeItem('auth')
      return newState
      break
    case 'getnotes':
      newState = { ...state, notes: action.payload }
      return newState
      break
    case 'select':
      newState = { ...state, edit: action.payload }
      return newState
      break
    default:
      return state
      break
  }
}

// AppContext
const AppContext = React.createContext(null)

// AppState component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

// useAppState Hook
export const useAppState = () => {
  return React.useContext(AppContext)
}
