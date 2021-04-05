import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  
    render() {
      const booksReading = this.props.state.books.filter((book)=>book.shelf==="currentlyReading");
      const booksRead = this.props.state.books.filter((book)=>book.shelf==="read");
      const booksWantToRead = this.props.state.books.filter((book)=>book.shelf==="wantToRead");
      const booksNoneAssigned = this.props.state.books.filter((book)=>book.shelf==="none");
  
      return(
          <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>Matthieu's Book library</h1>
              </div>
              {booksReading.length ? <Bookshelf title={'Currently Reading'} books={booksReading} shelfChange={this.props.shelfChange}/> : null}
              {booksRead.length ? <Bookshelf title={'Read'} books={booksRead} shelfChange={this.props.shelfChange}/> : null}
              {booksWantToRead.length ? <Bookshelf title={'Want To Read'} books={booksWantToRead} shelfChange={this.props.shelfChange}/> : null}
              {booksNoneAssigned.length ? <Bookshelf title={'Not assigned'} books={booksNoneAssigned} shelfChange={this.props.shelfChange}/> : null}
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button></button>
              </Link>
            </div>
          </div>
        );
      }
    }
  
  export default Home