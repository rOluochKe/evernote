import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from '../pages/Auth.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Home from '../pages/Home.jsx'
import Nav from './Nav.jsx'

export const App = (props) => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth/:form' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  )
}
