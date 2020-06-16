import React, { Component } from 'react'
import axios from "axios";
import './App.css';

// components
import Products from './components/Products'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      filteredProducts: [],
    }
  }
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
        <h3 className="title">E-commerce Shopping Cart</h3>
        <hr />
        <div className="row">
          <div className="col-md-8">
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