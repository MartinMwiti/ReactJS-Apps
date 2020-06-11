import React from 'react'


function SearchArea(props) {

    return (
      <div className="search-area">
        <form action="" onSubmit={props.searchBook}>
          <input
            className="search-box"
            onChange={props.handleSearch}
            name=""
            value={props.searchField}
            type="text"
            placeholder="Enter search"
          />
          <button className="search-btn" type="submit">
            <i className="fas fa-search" />
          </button>
          <select defaultValue="Sort" onChange={props.handleSort}>
            <option disabled value="Sort">Sort</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </form>
      </div>
    );
}

export default SearchArea;