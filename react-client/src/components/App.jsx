import React from 'react'
// import style from './style/App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage'
import MainPage from './MainPage/MainPage'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact>
          <MainPage />
        </PrivateRoute>
        <PublicRoute path="/login" exact>
          <LoginPage />
        </PublicRoute>
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App