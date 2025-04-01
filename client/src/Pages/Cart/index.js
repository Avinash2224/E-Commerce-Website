"use client"

import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Chocolate", price: 10, quantity: 1 },
    { id: 2, name: "Sample Product 2", price: 20, quantity: 1 },
    { id: 3, name: "Sample Product 3", price: 30, quantity: 1 },
    { id: 4, name: "Sample Product 4", price: 40, quantity: 1 },
    { id: 5, name: "Sample Product 5", price: 50, quantity: 1 },
    { id: 6, name: "Sample Product 6", price: 60, quantity: 1 },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.1; // 10% discount
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + tax;

  const imageUrl = "https://www.egiftmart.com/uploaded_files/itempic/dairymilk-silk.jpg";

  return (
    <section className="cartPage">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>Your Cart</h3>
            <p>
              There are <b>{totalItems}</b> products in your cart.
            </p>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="product-cell">
                        <img src={imageUrl} alt={item.name} className="product-image" />
                        <span>{item.name}</span>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="quantity-control">
                          <button className="btn btn-outline quantity-btn" onClick={() => updateQuantity(item.id, -1)}>
                            -
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button className="btn btn-outline quantity-btn" onClick={() => updateQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="cart-summary-container">
              <h4>Cart Summary</h4>
              <p><b>Subtotal:</b> ${subtotal.toFixed(2)}</p>
              <p><b>Discount (10%):</b> -${discount.toFixed(2)}</p>
              <p><b>Tax (8%):</b> +${tax.toFixed(2)}</p>
              <hr />
              <p className="total-price"><b>Total:</b> ${total.toFixed(2)}</p>
              <button className="btn btn-primary w-100">Checkout</button>
            </div>

            <div className="refund-policy">
              <h5>Refund Policy</h5>
              <p>Easy returns within 30 days.</p>
              <p>100% refund for damaged items.</p>
              <p>Hassle-free exchange process.</p>
              <a href="#">View complete refund policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
