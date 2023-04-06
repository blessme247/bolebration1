import React from 'react'

const FoodCard = ({foodImage, foodName, price}) => {
  return (
    <div className='foodCard'>
        <img src={foodImage} alt="food" />
        <div className="foodName">{foodName}</div>
        <div className="more">
            <div className="price">{price}</div>
            <button className='orderBtn'>Order</button>
        </div>
    </div>
  )
}

export default FoodCard