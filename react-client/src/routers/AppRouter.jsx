import React from 'react'
import { BrowserRouter, Route, Link, Switch, useParams } from "react-router-dom"

const AppRouter = ({children}) => {
  console.log('children:', children)
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about/:name">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter