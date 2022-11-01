

import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";
import './footer.css'

function Footer() {
  return (
    <div className='container'>
        <div className='footerContainer'>
            <div>
            <p>
            Startup Framework contains components and complex blocks which can easily be integrated into almost any design. 
            </p>
            </div>
            <div className='footerIcon'>
            <AiFillFacebook className="footerIco"/>
            <IoLogoTwitter className="footerIco"/>
            <BsPinterest className="footerIco"/>
            </div>

        </div>
    </div>
  )
}

export default Footer