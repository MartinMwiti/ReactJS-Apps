import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

import util from "../util";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {

    const productItems = this.props.products.map((product) => (
      
      <div className="col-md-4" key={product.id}>

        <div className="text-center card mb-3">
          <a
            href={`#${product.id}`}
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            <img
              className="card-img-top"
              src={`products/${product.sku}_2.jpg`}
              alt={product.title}
            />
            <p className="card_product_title">{product.title}</p>
          </a>
          
          <div className="card-text">
            <b className="mr-3">{util.formatCurrency(product.price)}</b>
            <button
              className="btn btn-primary"
              onClick={() =>
                this.props.addToCart(this.props.cartItems, product)
              }
            >
              Add <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
