import React, { Component } from 'react'

class Basket extends Component {
    render() {

        const { cartItems } = this.props;
        return (
          <div className="alert alert-info">
            {cartItems.length === 0 ? (
              "Basket is empty"
            ) : (
              <div>
                You have {cartItems.length} items in your cart. <hr />
              </div>
            )}

            {cartItems.length > 0 && (
              <div>
                <ul className="text-left">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <b>{item.title}</b> X {item.count}
                      <button
                        className="btn btn-danger ml-2"
                        onClick={(e) =>
                          this.props.handleRemoveFromCart(e, item)
                        }
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
    }
}

export default Basket