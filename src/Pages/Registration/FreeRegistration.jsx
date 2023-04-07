import React, {useState} from 'react'
import "./freeRegistration.scss"
import leftImage from "../../assets/Images/registerImg.jpg"
import FreeRegistrationForm from './FreeRegistrationForm'
import ConfirmationPopup from './ConfirmationPopup'

const FreeRegistration = () => {

  const [showConfirmation, setShowConfirmation] = useState(false)
  return (

    <> 
    <div className='freeRegPage'>
        <div className="imageWrapper">
            <img src={leftImage} alt="bole (pantain)" />
        </div>
        
            <FreeRegistrationForm  />

    </div>

      {showConfirmation ? <ConfirmationPopup /> : null}
            

    </>
  )
}

export default FreeRegistration