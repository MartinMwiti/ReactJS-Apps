import React from 'react'

const Movie = (props) =>{
    return ( // whenever you write jsx, return () must be used
        <div className="col s12 m6 l3">

            <div className="card">
                <div className="card-image waves-effect waves-black waves-light">   
                            {/* LOOP FOR EACH IMAGE */}
                        {
                        props.image == null
                            ?
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM5BMvVJfq-yeKU5vJloUOeE58Rw0U4ABfIovM32GzEjQMmO35&usqp=CAU"} alt="card no-pic" style={{ width: '100%', height: 360 }} />
                            :
                            <img alt="card pic" src={`https://image.tmdb.org/t/p/w185${props.image}`} style={{ width: '100%', height: 360 }} />
                        }                   
                </div>
                <div className="card-content">
                    <p><a href="/#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
            </div>

        </div>
    )
}

export default Movie