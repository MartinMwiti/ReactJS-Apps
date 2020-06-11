import React, { Component } from 'react'
import './App.css'

// components
import Header from './components/Header'
import Books from './components/Books'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    )
  }
}


export default App;