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

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        !query ?
        this.setState({
            items: []
        }) :
        BooksAPI.search(query).then(books=>{
            if (Object.keys(books)[0]==='error') { 
            this.setState({
                items: []
            })} else {
                books.forEach(book=>book.shelf='none')
                this.setState({
                    items: books
        })}})}

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

                    this.state.items.filter(item => (item.imageLinks) && (item.authors)).map(searchPageBook=>{

                        const matchingBook = this.props.state.books.find(homePageBook =>
                                (homePageBook.id === searchPageBook.id)
                            )

                        if (matchingBook) {
                            return <li key={matchingBook.id}><Book book={matchingBook} shelfChange={this.props.shelfChange}/></li>
                        } else {
                            return <li key={searchPageBook.id}><Book book={searchPageBook} shelfChange={this.props.shelfChange}/></li>
                        }

                })}
                </ol>
            </div>
          </div>
        )
    }

}

export default SearchPage