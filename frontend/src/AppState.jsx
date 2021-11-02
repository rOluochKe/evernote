import React, { useContext, useReducer } from 'react'

// initial state
const initialState = {
  url: 'http://evernoteapp-ror-r-api.herokuapp.com',
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// AppContext
const AppContext = React.createContext(null)

// AppState component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={(state, dispatch)}>
      {props.children}
    </AppContext.Provider>
  )
}

// useAppState Hook
export const useAppState = () => {
  return React.useContext(AppContext)
}
