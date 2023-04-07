
import {  useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import FreeRegistration from "./Pages/Registration/FreeRegistration";
import Order from "./Pages/Order/Order";
import { getFreeTicketCount } from "./utils/getCount";


function App() {

  useEffect(()=>{
    getFreeTicketCount()
  })

  return (

    <> 
    
    <Routes> 
       <Route path="/" element={<Homepage  />}/> 
       <Route path="/freeregistration"  element={<FreeRegistration />}/> 
       <Route path="/order" element={<Order />}/> 
      
     </Routes> 

     </>
   
  )
}

export default App
