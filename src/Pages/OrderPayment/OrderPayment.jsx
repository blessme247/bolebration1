import React, { useState } from "react";
import "./payment.scss";
import logo from "../../assets/Icons/logo.svg";
import OrderPaymentMethod from "./OrderPaymentMethod";
import PayWithCardScreen from "./PayWithCardScreen";
import VerifyOTP from "./VerifyOTP";

const OrderPayment = () => {
  // State to update the payment method screen
  const [screenIndex, setScreenIndex] = useState(1);

  return (
    <div className="paymentScreenWrapper">
      <div className="paymentContent">

        {screenIndex === 1 && ( 
        <div className="top">
          <img src={logo} alt="bolebration logo" />
          <p>Order Checkout</p>
        </div>
        ) }
        <div className="main">
          <div className="left">
            <p className="heading">Order Summary</p>
            <hr />
            <div className="orderDetails">
              <p>Bole & Family Platter</p>
              <p className="detail">
                <span>Amount</span> <span>#12,500</span>
              </p>
              <p className="detail">
                <span>Quantity</span> <span>2</span>
              </p>
              <p className="detail">
                <span>Event date</span> <span>30/04/2023</span>
              </p>
            </div>
            <hr />

            <div className="aggregate">
              <p className="detail">
                <span>Total</span> <span>25,000</span>
              </p>
            </div>
          </div>
          <div className="right">
            {screenIndex === 1 ? (
              <OrderPaymentMethod setScreenIndex={setScreenIndex} />
            ) : (screenIndex === 2) ?  (
              <PayWithCardScreen setScreenIndex={setScreenIndex}/>
            ) : (screenIndex === 3) ?  (
                <VerifyOTP setScreenIndex={setScreenIndex}/>
              ) : null
            
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
