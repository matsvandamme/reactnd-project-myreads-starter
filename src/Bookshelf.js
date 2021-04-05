import React from 'react'
import './App.css'
import Book from './Book.js'

class Bookshelf extends React.Component {

    render() {
      return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book)=>{
                      return <li key={book.id}><Book book={book} shelfChange={this.props.shelfChange}/></li>
                    })}
                </ol>
              </div>
            </div>
    );
    }}
  

  export default Bookshelf; 