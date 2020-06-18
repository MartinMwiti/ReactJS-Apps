import React, { Component } from 'react'
import { Provider } from "react-redux";
import store from './store'
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

  
  componentDidMount() {
    
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
      });
    }
  }

  

  // Adding Items to Cart
  handleAddToCart = (e, product) => {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      const cartItems = state.cartItems;
      let productAlreadyInCart = false; // set this into state

      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 }); // if the itm already exist, make the length/count be 1 representing that item
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // to save the product into local storage
      return cartItems
    });
  };

  handleRemoveFromCart=(e, item)=>{
    this.setState((state) => {
        const cartItems = state.cartItems.filter((a) => a.id !== item.id); // all id for items in cartItems that don't match the 'item.id'
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        return {cartItems};    // same as return { cartItems: cartItems };
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container text-center">
          <NavBar />
          <hr />
          <div className="row">
            <div className="col-md-8">
              
              <Filter />

              <hr />

              <Products
                handleAddToCart={this.handleAddToCart}
              />
            </div>

            <div className="col-md-4">
              <Basket
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
              
            </div>
          </div>
        </div>
      </Provider>
    );
  }
};

export default App;