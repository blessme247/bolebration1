
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import FreeRegistration from "./Pages/Registration/FreeRegistration";
import Order from "./Pages/Order/Order";


function App() {

  const [ticketCount, setTicketCount] = useState(0)

  return (

    <> 
    
    <Routes> 
       <Route path="/" element={<Homepage  ticketCount={ticketCount}/>}/> 
       <Route path="/freeregistration"  element={<FreeRegistration ticketCount={ticketCount} setTicketCount={setTicketCount}/>}/> 
       <Route path="/order" element={<Order />}/> 
      
     </Routes> 

     </>
   
  )
}

export default App
