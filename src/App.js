import React from 'react'
import './App.css'
import Home from './Home.js'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
      return(
        <Router>
            <Switch >
              <Route exact path='/' component={Home} />
              <Route path='/search' component={SearchPage} />
            </Switch >
        </Router>
      );
  }

}

export default App