import React, { Component } from 'react'
import '../App.css';

// Components
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import Pagination from './Pagination'
import MovieInfo from './MovieInfo'

class App extends Component {
  constructor(){
    super()
      this.state= {
        movies: [],
        searchTerm: '',
        totalResults: 0,
        currentPage: 1,
        currentMovie: null,
      }   
    // API Credentials
    this.apiKey = process.env.REACT_APP_API 
  };


  _refreshMovies() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then((data) => data.json()) // This will return a few fields, the one you want to look at is the results field. (As stated by the api provider-MovieDB)
      .then(data => {
          console.log(data)
        this.setState({ movies: [...data.results], totalResults: data.total_results })
      })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this._refreshMovies()
    
  };

  handleChange = (e)=>{ // fills out the searchTerm
    this.setState({searchTerm: e.target.value})
  }


  // PAGINATION
  nextPage = (pageNumber)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then((data) => data.json()) // This will return a few fields, the one you want to look at is the results field. (As stated by the api provider-MovieDB)
      .then(data => {
          console.log(data)
        this.setState({ movies: [...data.results], currentPage: pageNumber})
      })
  }


  viewMovieInfo=(id)=>{
    const filteredMovie = this.state.movies.filter((movie)=> movie.id === id) // returns an array with list of movies that match

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null // if the selected movie exists, pick the first one else return 'null'. Meaning no movie exists.

    this.setState({ currentMovie: newCurrentMovie})
  }

  closeMovieInfo = ()=>{
    this.setState({currentMovie: null})
  }

  
  render() {

    const numberPages = Math.floor(this.state.totalResults / 20)

    return (
      <div>

        <Nav />
        {this.state.currentMovie == null ? 
        <div>
          <SearchArea 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            searchTerm={this.state.searchTerm}
          />

          <MovieList
            movies={this.state.movies}
            viewMovieInfo={this.viewMovieInfo}
          />

          {
            this.state.totalResults > 20
              ?
              <Pagination
                pages={numberPages}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
              :
              '' // display nothing if there in no pagination       
          }
        </div>

        :

        <MovieInfo 
          closeMovieInfo={this.closeMovieInfo}
          currentMovie={this.state.currentMovie}
        />
        }

        

      </div>
    )
  };
}

export default App;