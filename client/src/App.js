import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Admin from './components/admin'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/admin">Admin</Link>
        </Route>
        <Route path='/admin' component={ Admin } />
      </Switch>
    </Router>
  )
}

export default App
