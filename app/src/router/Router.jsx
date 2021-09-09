import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Top } from '../components/pages/Top'
import { Users } from '../components/pages/Users'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
