import React, { useState } from "react";
import "./order.scss";

import logo from "../../assets/Icons/logo.svg";
import FoodCard from "./FoodCard";
import Cart from "./Cart";
import { foodTray } from "./food";
import { useDispatch, useSelector } from "react-redux";
import { addFood, removeFood } from "../../redux/features/Cart/cartSlice";

const Order = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const itemsInCart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className="orderPageWrapper">
      <div className="header">
        <img src={logo} alt="logo" />
        {/* <div className="text">Pre-Order</div> */}
        <div className="cartOpen" onClick={() => setCartOpen(true)}>
          Cart
        </div>
      </div>

      {isCartOpen ? <Cart setCartOpen={setCartOpen} /> : null}

      <div className="menu">
        <div className="menuHead">All foods</div>

        <div className="foodCardWrapper">
          {foodTray.map((food) => {
            return (
              <FoodCard
                key={food.id}
                foodImage={food.imageSrc}
                foodName={food.name}
                price={food.price}
                addFoodFunc={()=>dispatch(addFood(food))}
              />
            );
          })}
        </div>

        <div className="foodCardWrapper"></div>
      </div>
    </div>
  );
};

export default Order;
