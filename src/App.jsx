
import {  useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Order from "./Pages/Order/Order";
import { getFreeTicketCount } from "./utils/getCount";
import Registration from "./Pages/Registration/Registration";
import Payment from "./Pages/Payment/Payment";
import { ToastContainer } from "react-toastify";
import NoFreeTicket from "./Pages/NoFreeTicket/NoFreeTicket";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [count, setCount] = useState()

  useEffect(()=>{
    getFreeTicketCount().then((data)=>{
      setCount(data.count)
    })
  }, [])

  return (

    <> 
    <ToastContainer autoClose={2000} pauseOnHover theme="dark" />
    
    <Routes> 
       <Route path="/" element={<Homepage count={count}  />}/> 
       <Route path="/registration"  element={<Registration count={count} />}/> 
       <Route path="/order" element={<Order />}/> 
       <Route path="/payment" element={<Payment />}/> 
       <Route path="/freeticketexhausted" element={<NoFreeTicket />}/> 
      
     </Routes> 

     </>
   
  )
}

export default App
