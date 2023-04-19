import React, { useState } from "react";
import "./payment.scss";
import logo from "../../assets/Icons/logo.svg";
import OrderPaymentMethod from "./OrderPaymentMethod";
import PayWithCardScreen from "./PayWithCardScreen";
import VerifyOTP from "./VerifyOTP";

const OrderPayment = () => {
  // State to update the payment method screen
  const [screenIndex, setScreenIndex] = useState(1);

  // get user Cart Items from localStorage
  let userCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // initiate a total variable 
  let total = 0;

  return (
    <div className="paymentScreenWrapper">
      <div className="paymentContent">
        {screenIndex === 1 && (
          <div className="top">
            <img src={logo} alt="bolebration logo" />
            <p>Order Checkout</p>
          </div>
        )}
        <div className="main">
          <div className="left">
            <p className="heading">Order Summary</p>
            <hr />
            <div className="orderDetails">
              {userCartItems &&
                userCartItems.map((cartItem) => {

                  const amount = cartItem.price.replace("₦", "").replace(",", "");
                  const quantity = cartItem.count;

                  // Multiply amount by quantity to get total price of food ordered
                  total += amount * quantity;
                  return (
                    <div className="orderDetail">
                      <p className="foodName">{cartItem.name}</p>
                      <p className="detail">
                        <span>Amount</span> <span>{cartItem.price}</span>
                      </p>

                      <p className="detail">
                        <span>Quantity</span> <span>{cartItem.count}</span>
                      </p>
                    </div>
                  );
                })}

                <p className="detail">
                <span>Charge</span> <span>₦50</span>
                </p>
              {/* <p className="detail">
                <span>Event date</span> <span>30/04/2023</span>
              </p> */}
            </div>
            <hr />

            <div className="aggregate">
              <p className="detail">
                <span>Total</span> <span>₦{(total + 50)?.toLocaleString()}</span>
              </p>

              <p className="detail lastDetail">
              <span>Inclusive of ₦50 transaction charge </span>
              </p>
            </div>
          </div>
          <div className="right">
            {screenIndex === 1 ? (
              <OrderPaymentMethod total={total} setScreenIndex={setScreenIndex} />
            ) : screenIndex === 2 ? (
              <PayWithCardScreen setScreenIndex={setScreenIndex} />
            ) : screenIndex === 3 ? (
              <VerifyOTP setScreenIndex={setScreenIndex} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
