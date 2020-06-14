import React from 'react'
import Movie from './Movie'

const MovieList = (props) =>{
    return (
        <div className="container">
            <div className="row">
                {
                    props.movies.map((movie, i) =>{
                        return (
                            <Movie 
                                key={i} 
                                image={movie.poster_path}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;