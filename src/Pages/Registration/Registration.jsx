import React, {useState, useEffect} from 'react'
import "./freeRegistration.scss"
import leftImage from "../../assets/Images/registerImg.jpg"
import FreeRegistrationForm from './FreeRegistrationForm'
import PreorderConfirmationModal from './PreorderConfirmation'
import PaidRegistrationForm from './PaidRegistrationForm'

const Registration = ({count}) => {


  const [isFreeTicketExhausted, setTicketExhausted] = useState(false)
  //useState for toggling confirmation modal 
  const [showConfirmation, setShowConfirmation] = useState(false);

  //function for showing confirmation modal
  const showModal = ()=>{
    setShowConfirmation(true)
  }


  return (

    <> 
    <div className='freeRegPage'>
        <div className="imageWrapper">
            <img src={leftImage} alt="bole (plantain)" />
        </div>
        
            {count < 2500 ? <FreeRegistrationForm /> : <PaidRegistrationForm  />  }

    </div>
            

    </>
  )
}

export default Registration