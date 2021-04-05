import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class SearchPage extends React.Component {

    state={
        query: '',
        items: []
    }

    updateQuery = async (query) => {
        this.setState({
            query: query
        })
        var items = await this.searchBooks(query);
        if (Object.keys(items)[0]==='error') items=[];
        this.setState({
            items: items
        })
    }

    searchBooks = async (query) => {
        if (!query) return [];
        const books = await BooksAPI.search(query);
        return books;
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=>{this.updateQuery(event.target.value)}} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.items.map((item)=>{
                            return(
                                <li key={item.title}><Book book={item} shelfChange={this.props.shelfChange}/></li>
                            )
                        })
                    }
                </ol>
            </div>
            {JSON.stringify(this.state)}
          </div>
        )
    }

}

export default SearchPage