import React from 'react'

function ProductItem(props) {
    return (
        <div className="col-md-4" key={props.product.id}>
            <div className="thumbnail text-center">
                <a
                    href={`#${props.product.id}`}
                    onClick={this.props.handleAddToCard}>
                    <img src={`products/${props.product.sku}.jpg`} alt={props.product.title} />
                    <p>
                        {props.product.title}
                    </p>
                </a>
            </div>
        </div>
    )
}

export default ProductItem;