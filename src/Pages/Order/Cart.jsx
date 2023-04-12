import React from 'react'
import OrderItem from './OrderItem'

const Cart = ({setCartOpen}) => {
  return (
    <div className="cartMenu">
          <div className="cartMenu_heading">
            <div className="text">Pre-order Details</div>
          <div onClick={()=>setCartOpen(false)} className="closeMenuBtn">X</div>
          </div>
          <hr />

          <div className="cartMenu_orders">
               <OrderItem />
               <OrderItem />
               <OrderItem />

                
          </div>

          <div className="cartMenu_footer">
            <div className="price"><span>Total </span> <span>#35,600</span></div>
            <div className="checoutBtn">PROCEED TO CHECKOUT</div>
          </div>
        </div>
  )
}

export default Cart