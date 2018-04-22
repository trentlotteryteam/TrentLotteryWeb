// We only need to import the modules necessary for initial render
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import NoMatch from './NoMatch'

const rootRoutes = (
  <Switch>
    <Route path="/" component={Home}/>
    <Route component={NoMatch}/>
  </Switch>
)

export default rootRoutes
