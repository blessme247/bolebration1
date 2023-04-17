import React from 'react'
import '../OrderPayment/payWithCard.scss'

const PayWithCardScreen = ({setScreenIndex}) => {
  return (
    <div className='cardPaymentWrapper'>
        <div className="top">
            Pay With Debit Card
        </div>

        <form className="debitForm">
            <div className="group">
                <div className="cardDetailsGroup">
                    <label>Card Number</label>
                    <input type='text'></input>
                </div>
                <div className="cardDetailsGroup">
                    <label>Card Name</label>
                    <input type='text'></input>
                </div>
            </div>

            <div className="group additionalDetails">
            <div className="additionalDetailsGroup expiryDate">
                    <label>Expiry date (YY/MM)</label>
                    <input type='month'></input>
                </div>
                <div className="additionalDetailsGroup">
                    <label>CVV</label>
                    <input type='text'></input>
                </div>
                <div className="additionalDetailsGroup">
                    <label>Pin</label>
                    <input type='text'></input>
                </div>
            </div>

            <button onClick={()=>{
                setScreenIndex(3)
            }} className='verifyBtn'>Pay</button>
        </form>
    </div>
  )
}

export default PayWithCardScreen