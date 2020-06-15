import React, { Component } from 'react'


class Products extends Component {

    render() {
        const products = Array.from(this.props.products)
        const productItems = products.map((product) => (
            // console.log(product.title)
          <div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
              <a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
                <img
                  src={`products/${product.sku}_2.jpg`}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </a>
            </div>
          </div>
        ));

        return <div className="row">{productItems}</div>
    }
}

export default Products;