import React from 'react'
import './App.css'

class Book extends React.Component {

    handleShelfChange= (event) => {
        this.props.shelfChange(this.props.book,event.target.value);
      }
    
    render() {
        return <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
            <select onChange={this.handleShelfChange} value={this.props.book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        {
            ("authors" in this.props.book && this.props.book.authors.length) ?
                <div className="book-authors">{this.props.book.authors.join(', ')}</div> : null
        }
        </div>;
    }}
  

  export default Book; 