import React, { Component } from 'react'
import axios from "axios";
import './App.css';

// components
import Products from './components/Products'
import NavBar from './components/NavBar'
import Filter from './components/Filter'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      filteredProducts: [],
    }
  }

  // API
  componentDidMount(){
        axios.get("http://localhost:8000/products/")
        .then((response) =>
          // console.log(response.data),
          this.setState({
            products: response.data,
            filteredProducts: response.data,
          })
        )
  };
        
  render() {

    return (
      <div className="container text-center">
        <NavBar />
        <hr />
        <div className="row">

          <div className="col-md-8">

            <Filter 
              size={this.state.size} 
              sort={this.state.sort} 
              handleChangeSize={this.handleChangeSize} 
              handleChangeSort={this.handleChangeSort}
            />

            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />

          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    );

  }
};

export default App;