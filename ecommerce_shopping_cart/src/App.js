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
              <Products />
            </div>

            <div className="col-md-4">
              <Basket />
            </div>
            
          </div>
        </div>
      </Provider>
    );
  }
};

export default App;