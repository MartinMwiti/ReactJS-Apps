import React, { Component } from 'react'
import axios from "axios";
import './App.css';

// components
import Products from './components/Products'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Basket from './components/Basket'

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: [],
    };
    // this.handleChangeSort = this.handleChangeSort.bind(this)
    // this.handleChangeSize = this.handleChangeSize.bind(this)
  }

  // API
  componentDidMount() {
    axios.get("http://localhost:8000/products/").then((response) =>
      // console.log(response.data),
      this.setState({
        products: response.data,
        filteredProducts: response.data,
      })
    );
  }

  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };

  handleChangeSize = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  // SORT & FILTER PRODUCTS METHOD
  listProducts() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.

      if (state.sort !== "") {
        state.products.sort((
          a,
          b // sort based on lowest/highest in terms of there prices.
        ) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort(
          (a, b) => (a.id < b.id ? 1 : -1) // sort based on there id. This will act as the default sort method. i.e when you click 'select'
        );
      }

      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            (a) => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          ),
        };
      }

      return { filteredProducts: state.products };
    });
  }

  // Adding Items to Cart
  handleAddToCart = (e, product)=>{
    this.setState((state)=>{
      // Important: read `state` instead of `this.state` when updating.
      const cartItems = state.cartItems
      let productAlreadyInCart = false // set this into state

      cartItems.forEach(item=>{
        if(item.id === product.id){
          productAlreadyInCart = true
          item.count++
        }
      })
        if(!productAlreadyInCart){
          cartItems.push({...product, count:1}) // if the itm already exist, make the length/count be 1 representing that item
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems)); // to save the product into local storage
        return cartItems
    })
  }

  
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
              count={this.state.filteredProducts.length}
            />

            <hr />

            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>

          <div className="col-md-4">
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveCart}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default App;