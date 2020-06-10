import React from 'react'


function SearchArea(props) {

    return (
        <div className="search-area">
            <form action="">
                <input 
                    className="search-box" 
                    onChange={props.handleSearch}
                    name="" 
                    value="" 
                    type="text"
                    placeholder="Enter search"
                />
                <button className="search-btn" type="submit"><i className="fas fa-search" /></button>
            </form>
            
        </div>
    )
}

export default SearchArea;