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

        return book;
      })

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
        return (
          <div>
            <SearchArea
              searchField={this.state.searchField}

              handleSearch={this.handleSearch}
              searchBook={this.searchBook}
              handleSort={this.handleSort}
            />

            <BookList books={this.state.books}/>

          </div>
        );
    }
}

export default Books