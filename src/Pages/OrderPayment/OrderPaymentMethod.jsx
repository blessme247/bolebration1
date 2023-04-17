import React from "react";
import debitIcon from "../../assets/Icons/debitCard.svg";
import transferIcon from "../../assets/Icons/transfer.svg";

const OrderPaymentMethod = ({ setScreenIndex }) => {
  return (
    <div className="paymentMethodWrapper">
      <p className="orderDetail total">₦10,000</p>
      <p className="orderDetail charge">Surcharge ₦50</p>

      <p className="orderDetail amountDue">Amount Due: ₦10,050</p>

      <div className="paymentOption">
        <div className="heading">Choose your preferred payment option</div>
        <div className="option debitOption" onClick={() => setScreenIndex(2)}>
          <span>
            {" "}
            <img src={debitIcon} alt="debit" />{" "}
          </span>{" "}
          <span className="title"> Debit Card</span>
        </div>
        <div className="option transferOption">
          <span>
            {" "}
            <img src={transferIcon} alt="transfer" />{" "}
          </span>{" "}
          <span className="title">Transfer</span>
        </div>
      </div>
    </div>
  );
};

export default OrderPaymentMethod;
