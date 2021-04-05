import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class Home extends React.Component {

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
      const booksReading = this.state.books.filter((book)=>book.shelf==="currentlyReading");
      const booksRead = this.state.books.filter((book)=>book.shelf==="read");
      const booksWantToRead = this.state.books.filter((book)=>book.shelf==="wantToRead");
      const booksNoneAssigned = this.state.books.filter((book)=>book.shelf==="none");
  
      return(
          <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>Matthieu's Book library</h1>
              </div>
              {booksReading.length ? <Bookshelf title={'Currently Reading'} books={booksReading} shelfChange={this.shelfChange}/> : null}
              {booksRead.length ? <Bookshelf title={'Read'} books={booksRead} shelfChange={this.shelfChange}/> : null}
              {booksWantToRead.length ? <Bookshelf title={'Want To Read'} books={booksWantToRead} shelfChange={this.shelfChange}/> : null}
              {booksNoneAssigned.length ? <Bookshelf title={'Not assigned'} books={booksNoneAssigned} shelfChange={this.shelfChange}/> : null}
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