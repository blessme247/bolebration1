import * as yup from "yup";



  export let debitCardSchema = yup.object().shape({
    cardNumber: yup.string().required(),
    lastName: yup.string().required(),
    cvv: yup.string().email().required(),
    phone: yup.string().required(),
    ticketType: yup.string().required(),
  });