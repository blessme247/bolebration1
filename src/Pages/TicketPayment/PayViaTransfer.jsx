import React from 'react'
import logo from "../../assets/Icons/logo.svg";

//Styles Import
import "./payViaTransfer.scss";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const PayViaTransfer = () => {

        // get user Paid Registration Details from localStorage
  let userPaidRegDetails = JSON.parse(localStorage.getItem("userPaidRegDetails")) || {};

  let amountDue = userPaidRegDetails && (userPaidRegDetails.amount + 50).toLocaleString();

  const navigate = useNavigate();

  const notifyUser = ()=> {
      Swal.fire({
        position: "center",
        icon: "info",
        title:
          "You will get an email with your ticket after your transfer is confirmed.",
        showConfirmButton: true,
        timer: 3500,
      }).then(() => {
        navigate("/");
      });
  }


  return (
    <div className='transferScreenWrapper'>
        

        <div className="content">
            <div className = "top">
            Transfer ₦{amountDue} to
            </div>

            <div className="accountDetails">
                <p>Account Name: Xtrapay-Bolebration Events</p>
                <p>Account Number: 1024490016</p>
                <p>Vfd Bank</p>
            </div>

            <p className="info">Please ensure that the Sender's name matches with the name in the Registration form</p>

            <div className="accountDetails confirmation" onClick={()=> notifyUser()}>
                I have sent the money
            </div>

        </div>
    </div>
  )
}

export default PayViaTransfer