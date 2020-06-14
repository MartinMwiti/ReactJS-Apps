import React, { Component } from 'react'
import '../App.css';

// Components
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'

class App extends Component {
  constructor(){
    super()
      this.state= {
        movies: [],
        searchTerm: '',
      }   
    // API Credentials
    this.apiKey = process.env.REACT_APP_API 
  };


  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then((data) => data.json()) // This will return a few fields, the one you want to look at is the results field. (As stated by the api provider-MovieDB)
    .then(data => {
        console.log(data)
      this.setState({movies: [...data.results]})
    })
  };

  handleChange = (e)=>{ // fills out the searchTerm
    this.setState({searchTerm: e.target.value})
  }

  
  render() {
    return (
      <div>
        <Nav />
        <SearchArea 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <MovieList 
          movies={this.state.movies}
        />
      </div>
    )
  };
}

export default App;