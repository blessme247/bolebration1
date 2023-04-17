import React from 'react'
import leftImage from "../../assets/Images/registerImg.jpg"
import FreeRegistrationForm from './FreeRegistrationForm'
import PaidRegistrationForm from './PaidRegistrationForm'

// Styles Import
import "./freeRegistration.scss"


const Registration = ({count}) => {



  return (

    <> 
    <div className='freeRegPage'>
        <div className="imageWrapper">
            <img src={leftImage} alt="bole (plantain)" />
        </div>
        
            {count <  2500 && <FreeRegistrationForm />}
            {count  >=  2500 && <PaidRegistrationForm />}

    </div>
            

    </>
  )
}

export default Registration