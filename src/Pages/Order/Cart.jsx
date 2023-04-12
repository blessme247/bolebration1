import React, { useEffect } from "react";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";

const Cart = ({ setCartOpen }) => {

  const itemsInCart = useSelector((state) => state.cart.cart);

  useEffect(() => {});

  return (
    <div className="cartMenu">
      <div className="cartMenu_heading">
        <div className="text">Pre-order Details</div>
        <div onClick={() => setCartOpen(false)} className="closeMenuBtn">
          X
        </div>
      </div>
      <hr />

      <div className="cartMenu_orders">

        {itemsInCart.length > 0 ? itemsInCart.map((item)=> {
            return (

                <OrderItem key={item.id} foodName={item.name} price={item.price} />
            )
        } ) : <p>No items in your cart</p>}
      </div>

      <div className="cartMenu_footer">
        <div className="price">
          <span>Total </span> <span>#35,600</span>
        </div>
        <div className="checoutBtn">PROCEED TO CHECKOUT</div>
      </div>
    </div>
  );
};

export default Cart;
