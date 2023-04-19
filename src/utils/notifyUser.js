// This function will notify the user of debit card payment option not available

import Swal from "sweetalert2";


export const notifyUser = ()=> {
    Swal.fire({
        position: "center",
        icon: "info",
        title:
          "This Payment Option is currently unavailable, Please use the transfer option",
        showConfirmButton: true,
        timer: 4000,
      });
}

export const notifyUserAfterTicketTransfer = ()=> {
    Swal.fire({
      position: "center",
      icon: "info",
      title:
        "You will get an email with your ticket after your transfer is confirmed.",
      showConfirmButton: true,
      timer: 3500,
    })
    
}