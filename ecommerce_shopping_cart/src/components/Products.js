import React, { Component } from 'react'


class Products extends Component {

    render() {
        const products = Array.from(this.props.products)
        const productItems = products.map((product) => (
          // console.log(product.title)
          <div className="col-md-4" key={product.id}>
            <div className="text-center card mb-3" style={{"width": "14rem"}}>
              <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCard(e, product)}>
                <img
                  className="card-img-top"
                  src={`products/${product.sku}_2.jpg`}
                  alt={product.title}
                  style={{"height": "12rem"}}
                />
                <div className="card-text">
                  <p>{product.title}</p>
                  <b className="mr-3">{product.price}</b>
                  <button
                    className="btn btn-success"
                    onClick={(e)=>this.props.handleAddToCard(e, product)}
                  >Add{' '}<i class="fa fa-shopping-cart"></i></button>
                </div>               
              </a>
            </div>
          </div>
        ));

        return <div className="row">{productItems}</div>
    }
}

export default Products;