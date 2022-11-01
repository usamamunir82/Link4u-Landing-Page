import React from "react";
import "./contact.css";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";






function ContactUs() {
  return (
    <div className="container">
        <div className="contactUsContainer">
          <div className="contactUs-Data">
          <h3>
          Contact Us
          </h3>
          <p>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
          </div>
     
      <div className="contactContainer">
        <div className="dropUs">
          <span>Drop Us a Line</span>
          <p>We are always looking for a next great project</p>
          <div className="contactBox">
            <p>E-Mail</p>
            <input placeholder="Your Email" />
          </div>
          <div className="contactBox">
            <p>Mesaage</p>
            <textarea placeholder="Drop Us a Line" rows="5" cols="40" />
          </div>
          <div className="contactBox">
            <p>Name</p>
            <div className="nameBox">
            <input placeholder="Your Name"/>
<button>Send</button>
            </div>
          </div>
        </div>
        <div className="inTuch">
            <span>Get in Touch</span>
            <p>We appreciate each customer and we are proud that 60% of clients come back to work with us again.</p>
        
        <div className="tuchFirstIcon">
            <div className="iconNo">
                <IoIosCall className="icono"/>
                <span>+1 555 505 5050</span>
            </div>
            <div className="iconNo">
                <MdEmail className="icono"/>
                <span>
                info@Link4Uemail.com
                </span>
            </div>
        </div>
        <div className="inTuchLine">
            
        </div>
        <div className="onSocial">
            <span>We are on Socials</span>
            <div className="onSocialData">
            <div className="onSocialLeft">
                <div className="onSocialIcons">
                  <AiFillFacebook className="tuchIcon"/>
                    <span>Facebook</span>
                </div>
                <div className="onSocialIcons">
                    <IoLogoTwitter className="tuchIcon"/>
                    <span>Twitter</span>
                </div>
                <div className="onSocialIcons">
                    <BsPinterest className="tuchIcon"/>
                    <span>Pintrest</span>
                </div>
            </div>
            <div className="onSocialRight">
            <div className="onSocialIcons">
            <AiFillFacebook className="tuchIcon"/>
                    <span>Facebook</span>
                </div>
                <div className="onSocialIcons">
                <IoLogoTwitter className="tuchIcon"/>
                    <span>Twitter</span>
                </div>
                <div className="onSocialIcons">
                <BsPinterest className="tuchIcon"/>
                    <span>Pintrest</span>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
