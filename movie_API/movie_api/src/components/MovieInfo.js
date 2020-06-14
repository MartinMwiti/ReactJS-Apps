import React from 'react'


function MovieInfo(props) {
    return (
        <div className='container'>

            <div className="row" onClick={props.closeMovieInfo} style={{cursor:'pointer', paddingTop:50}}>
                <i className="fa fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go Back</span>
            </div>

            <div className="row">
                <div className="col s12 m4 l4">
                {
                props.currentMovie.poster_path === null ? 
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM5BMvVJfq-yeKU5vJloUOeE58Rw0U4ABfIovM32GzEjQMmO35&usqp=CAU"} style={{ width: '100%', height: 360 }} alt="card pic" /> : 
                <img alt="card pic" src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} style={{ width: '100%', height: 360 }} />
                }
                </div>

                <div className="col s12 m8">
                    <div className="info-container">
                        <p>{props.currentMovie.title}</p>
                        <p>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0,4)).join("/")}</p>
                        <p>{props.currentMovie.overview}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MovieInfo;