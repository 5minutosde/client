import React from "react"
import Home from './containers/Home/Home'
import Media from './containers/Media/Media'
import User from './containers/User/User'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:user/:mediaSlug" component={Media} />
            <Route path="/:user" component={User} />
        </Switch>
      </ BrowserRouter>
    </div>
  )
}

export default App
