import React from 'react'
import logo from "../../assets/Icons/logo.svg";
import OTPInput from '../../Components/OTPInput';

// Styles import
import "../OrderPayment/verifyOtp.scss"


const VerifyOTP = () => {
  return (
    <div className='verifyOTPage'>
        <div className='top'>
            <img src={logo} alt="logo" />
        </div>

        <div className='main'>
            <div className="main__head">
                Enter OTP
            </div>
            <div className="main__subHead">
                A 4 digit OTP has been sent to your phone number
            </div>

            <div className="main__OTP">
                <p className="text">OTP</p>
                <OTPInput/>
            </div>

            <div className="main__OTPresend">
                <p className="left">
            Didn’t receive the Code? <span> Resend Code</span> 
                </p>
                <p className="right">00:36</p>
            </div>

        </div>

        <button className="verifyOTPBtn">
            Verify OTP
        </button>
    </div>
  )
}

export default VerifyOTP