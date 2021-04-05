import React from 'react'
import './App.css'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class SearchPage extends React.Component {

    state={
        query: ''
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()})
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event)=>{this.updateQuery(event.target.value)}}
                    />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.props.state.books.map((book)=>{
                      return <li key={book.title}><Book book={book} shelfChange={this.props.shelfChange}/></li>
                    })}
              </ol>
            </div>
            {JSON.stringify(this.state)}
          </div>
        )
    }

}

export default SearchPage