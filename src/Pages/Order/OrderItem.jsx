import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/features/Counter/counterSlice";

const OrderItem = ({foodName, price}) => {
  const itemCount = useSelector((state) => state.counter.itemCount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="order">
        <div className="order_top">
          <div className="foodName">{foodName}</div>
          <div className="price"> {price}</div>
        </div>
        <div className="order_bottom">
          <div className="removeBtn">X REMOVE</div>
          <div className="quantity">
            {" "}
            <span onClick={() => dispatch(decrement())}>-</span>{" "}
            <span>{itemCount}</span>{" "}
            <span onClick={() => dispatch(increment())}>+</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
