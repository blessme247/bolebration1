import React from 'react'
import "./order.scss"

import logo from "../../assets/Icons/logo.svg";
import food from "../../assets/Images/image2.jpg"
import FoodCard from './FoodCard';

const Order = () => {
  return (
    <div className='orderPageWrapper'>

        <div className="header">
        <img src={logo} alt="logo" />
        <div className="text">Pre-Order</div>
        </div>

        <div className="menu">
            <div className="menuHead">All foods</div>

            <div className="foodCardWrapper">
                <FoodCard foodImage={food} foodName="Plantain Boat" price="₦1,000" />
                <FoodCard foodImage={food} foodName="Bole and Mackerel Fish" price="₦2,500" />
                <FoodCard foodImage={food} foodName="Bole and Chicken" price="₦3,000" />
                <FoodCard foodImage={food} foodName="Bole and Turkey" price="₦3,500" />
                <FoodCard foodImage={food} foodName="Bole and Whole Croaker Fish" price="₦6,000" />
                <FoodCard foodImage={food} foodName="Bole Family Platter" price="₦30,000" />

            </div>

            <div className="foodCardWrapper"></div>
        </div>
    </div>
  )
}

export default Order