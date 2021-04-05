import React from 'react'
import './App.css'
import Book from './Book.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {

    state={
        query: '',
        queryBooks: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()})
        BooksAPI.search(query).then((books)=>
        this.setState({
            queryBooks: books}))
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
                    <li></li>
                </ol>
            </div>
          </div>
        )
    }

}

export default SearchPage