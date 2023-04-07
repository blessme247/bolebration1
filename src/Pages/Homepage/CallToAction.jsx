import React from 'react'
import SwiperSlides from './SwiperSlides'
import { Link } from 'react-router-dom'

const CallToAction = ({ticketCount}) => {
  return (
    <div className="callToAction">
          <div className="freeTickets">
            <p>Free Tickets</p>
            <span>{ticketCount} 0f 1500</span>
          </div>

          <div className="freeTickets2">
            <p>Free Tickets</p>
            <span>{ticketCount} 0f 1500</span>
          </div>

          <SwiperSlides ticketCount />

          <div className="registerBtnWrapper">
            <Link to="/freeregistration" className="registerBtn">
              Register Now
            </Link>
          </div>
        </div>
  )
}

export default CallToAction