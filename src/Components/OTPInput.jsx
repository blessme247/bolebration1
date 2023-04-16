import React from 'react'
import PinInput from 'react-pin-input';


const OTPInput = () => {
  return (

<PinInput 
  length={4} 
  initialValue=""
  secret
  secretDelay={500} 
  onChange={(value, index) => {}} 
  type="numeric" 
  inputMode="number"
  style={{padding: '10px'}}  
  inputStyle={{borderColor: 'transparent', borderBottom: "1px solid #e5e5e5"}}
  inputFocusStyle={{ borderBottom: "1px solid #F18403"}}
  onComplete={(value, index) => {}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>
  )
}

export default OTPInput