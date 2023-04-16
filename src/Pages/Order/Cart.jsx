import React, { useEffect } from "react";
import OrderItem from "./OrderItem";

const Cart = ({ setCartOpen }) => {

  // get items in cart from localStorage 
  let itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || [];

  // initiate a total variable 
  let total = 0;

  // map over the items in cart to get each amount and quantity
  itemsInCart.map((item) => {
    const amount = item.price.replace("₦", "").replace(",", "");
    const quantity = item.count;

    // Multiply amount by quantity to get total price of food ordered
    total += amount * quantity;
  });

  return (
    <div className="cartMenu">
      <div className="cartMenu_heading">
        <div className="text">Pre-order Details</div>
        <div onClick={() => setCartOpen(false)} className="closeMenuBtn">
          +
        </div>
      </div>
      <hr />

      <div className="cartMenu_orders">
        {itemsInCart.length > 0 ? (
          itemsInCart.map((item, index) => {
            return (
              <OrderItem
                key={item.id}
                id={index}
                food={item}
                foodName={item.name}
                price={item.price}
                count={item.count}
              />
            );
          })
        ) : (
          <p>No items in your cart</p>
        )}
      </div>

      <div className="cartMenu_footer">
        <div className="price">
          <span>Total </span> <span>₦{total.toLocaleString()}</span>
        </div>
        <div className="checoutBtn">PROCEED TO CHECKOUT</div>
      </div>
    </div>
  );
};

export default Cart;
