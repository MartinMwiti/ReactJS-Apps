import React, { Component } from 'react'
import request from 'superagent'

// components
import SearchArea from './SearchArea'
import BookList from './BookList'

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort:'',
        }
    }

    // Handle onChange
    handleSearch=(e)=>{
        this.setState({
            searchField: e.target.value
        })
    }

    // Handle sort
    handleSort = (e) => {
        console.log(e.target.value)
      this.setState({
        sort: e.target.value
      })
    }

    // Clean Data
    cleanData = (data) => {
      const cleanedData = data.body.items.map((book)=>{
        if(book.volumeInfo.hasOwnProperty('publishedDate')=== false){
          book.volumeInfo['publishedDate'] = '0000'
        }

        else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
          book.volumeInfo['imageLinks'] = {
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM5BMvVJfq-yeKU5vJloUOeE58Rw0U4ABfIovM32GzEjQMmO35&usqp=CAU"
          }
        }
        // if no changes made. Inside cleanedData
        return book;
      })
      // if changes have been made. Outside/Product of cleanedData
      return cleanedData;
    }


    // "Get" method using entered value from searchField
    searchBook = (e)=>{
        e.preventDefault() // whenever we make a form submit
        request
          .get("https://www.googleapis.com/books/v1/volumes")
          .query({ q: this.state.searchField })
          .then((data) => {
              console.log(data)
            const cleanData = this.cleanData(data)
            this.setState({
              books: cleanData //location of the data as directed buy 'console.log(data)'
            })
          }); 
    }

    render() {
      // Sorted Books based on the years difference taking two values/books at a time
      const sortedBooks = this.state.books.sort((a,b)=>{
        if(this.state.sort === 'Newest'){
          return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        }
        else if(this.state.sort === 'Oldest') {
          return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        }
      });

        return (
          <div>
            <SearchArea
              searchField={this.state.searchField}

              handleSearch={this.handleSearch}
              searchBook={this.searchBook}
              handleSort={this.handleSort}
            />

            <BookList books={sortedBooks}/>

          </div>
        );
    }
}

export default Books