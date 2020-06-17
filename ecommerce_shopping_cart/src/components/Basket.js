import React, { Component } from 'react'

import util from "../util";

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
                      <b>{item.title}</b>
                      <button
                        className="btn btn-danger btn-xs float-right"
                        onClick={(e) =>
                          this.props.handleRemoveFromCart(
                            this.props.cartItems,
                            item
                          )
                        }
                      >
                        X
                      </button>
                      <br />
                      {item.count} X {util.formatCurrency(item.price)}
                    </li>
                  ))}
                </ul>

                <b className="mr-3">
                  Sum:{" "}
                  {util.formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </b>
                <button
                  onClick={() => alert("Todo: Implement checkout page.")}
                  className="btn btn-primary"
                >
                  checkout
                </button>
              </div>
            )}
          </div>
        );
    }
}

export default Basket