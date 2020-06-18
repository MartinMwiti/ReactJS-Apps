import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

import util from '../util'


class Products extends Component {
  componentDidMount(){
    this.props.fetchProducts() // call the method
  }

    render() {
        const products = Array.from(this.props.products)
        const productItems = products.map((product) => (
          // console.log(product.title)
          <div className="col-md-4" key={product.id}>
            <div className="text-center card mb-3">
              <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                <img
                  className="card-img-top"
                  src={`products/${product.sku}_2.jpg`}
                  alt={product.title}
                />
                <p className="card_product_title">{product.title}</p>
                <div className="card-text">                  
                  <b className="mr-3">{util.formatCurrency(product.price)}</b>
                  <button
                    className="btn btn-success"
                    onClick={(e)=>this.props.handleAddToCart(e, product)}
                  >Add{' '}<i className="fa fa-shopping-cart"></i></button>
                </div>               
              </a>
            </div>
          </div>
        ));

        return <div className="row">{productItems}</div>
    }
}

const mapStateToProps = (state) => ({ products: state.products.filteredItems }); // 'state' refers to the 'state' of redux. 'products' points to the 'productReducer' as specified in the root reducer.

export default connect(mapStateToProps, { fetchProducts })(Products);

// 'connect' accepts two values. mapStateToProps & action type