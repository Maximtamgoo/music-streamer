import React from 'react'
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ children, ...rest }) => {
  const isAuthed = true
  return (
    <Route {...rest} >
      {isAuthed ? <Redirect to='/' /> : children}
    </Route>
  )
}

export default PublicRoute