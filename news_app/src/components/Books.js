import React, { Component } from 'react'
import request from 'superagent'

// components
import SearchArea from './SearchArea'

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
        }
    }

    // Handle onChange
    handleSearch=(e)=>{
            // console.log(e.target.value)
        this.setState({
            searchField: e.target.value
        })
    }

    // "Get" method using entered value from searchField
    searchBook = (e)=>{
        e.preventDefault() // whenever we make a form submit
        request
          .get("https://www.googleapis.com/books/v1/volumes")
          .query({ q: this.state.searchField })
          .then((data) => {
            console.log(data);
          });

    }

    render() {
        return (
          <div>
            <SearchArea
              searchField={this.state.searchField}

              handleSearch={this.handleSearch}
              searchBook={this.searchBook}
            />
          </div>
        );
    }
}

export default Books