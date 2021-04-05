import React from 'react'
import './App.css'
import Home from './Home.js'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {

  state={
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books)=>{
      this.setState({
        books
      })
    });
  }

  shelfChange = (book,shelf) => {
    const stateCopy = Object.assign({}, this.state);
    const bookIndex = stateCopy.books.indexOf(book);
    BooksAPI.update(book,shelf);
    stateCopy.books[bookIndex].shelf=shelf;
    this.setState(stateCopy);
    }

  render() {
      return(
        <Router>
            <Switch >
              <Route exact path='/' >
                <Home state={this.state} shelfChange={this.shelfChange} />
              </Route>
              <Route exact path='/search' >
                <SearchPage state={this.state} shelfChange={this.shelfChange} />
              </Route>
            </Switch>
        </Router>
      );
  }

}

export default App