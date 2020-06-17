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
      filteredProducts: []
    }
    // this.handleChangeSort = this.handleChangeSort.bind(this)
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

  handleChangeSort = (e)=> {
    this.setState({sort: e.target.value})
    this.listProducts(); 
  }

  // SORT/FILTER PRODUCTS METHOD
  listProducts(){
    this.setState((state)=>{ // create new state for 'sort'

      if(state.sort !== '') {
        state.products.sort((a,b)=> // sort based on lowest/highest in terms of there prices.
          (state.sort === 'lowest') 
          ? 
            (a.price > b.price ? 1 : -1)
          :
            (a.price < b.price ? 1 : -1)
          )
      }
      else {
        state.products.sort((a, b)=> 
          (a.id < b.id ? 1 : -1) // sort based on there id. This will act as the default sort method. i.e when you click 'select'
          )
      }

      return { filteredProducts: state.products }

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

          <div className="col-md-4"></div>
        </div>
      </div>
    );

  }
};

export default App;