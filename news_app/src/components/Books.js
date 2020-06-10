import React, { Component } from 'react'

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

    render() {
        return (
            <div>
                <SearchArea handleSearch={this.handleSearch}/>
            </div>
        )
    }
}

export default Books