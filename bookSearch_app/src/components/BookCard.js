import React from 'react'

function BookCard(props) {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>Title: {props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</p>
            </div>
            
        </div>
    )
}

export default BookCard;

// substring(start, end)