import React, { useState, useEffect } from 'react'
import SwiperSlides from './SwiperSlides'
import { Link } from 'react-router-dom'
import { getFreeTicketCount } from '../../utils/getCount'

const CallToAction = () => {

  const [count, setCount] = useState()

  useEffect(()=>{
    getFreeTicketCount().then((data)=>{
      setCount(data.count)
    })
  }, [])
  return (
    <div className="callToAction">
          <div className="freeTickets">
            <div className="percent">
            {count ? <span>{Math.round((count/1500) * 100 )} %</span> : null}

            </div>

            <div className="count">
            <p>Free Tickets</p>
            <span>{count}/1500</span>
            </div>
          </div>

          <div className="freeTickets2">
          <div className="percent">
          {count ? <span>{Math.round((count/1500) * 100 )} %</span> : null}

            </div>

            <div className="count">
            <p>Free Tickets</p>
            <span>{count}/1500</span>
            </div>
          </div>

          <SwiperSlides ticketCount />

          <div className="registerBtnWrapper">
            {count === 1500 ? <Link to="/freeticketexhausted" className="registerBtn">
              Register Now
            </Link> : <Link to="/registration" className="registerBtn">
              Register Now
            </Link>}
            
          </div>
        </div>
  )
}

export default CallToAction