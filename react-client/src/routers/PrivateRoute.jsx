import React from 'react'
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthed = true
  return (
    <Route {...rest} >
      {isAuthed ? children : <Redirect to='/login' />}
    </Route>
  )
}

export default PrivateRoute