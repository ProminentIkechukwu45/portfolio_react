import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/profile_pic.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="image" src={footer_logo} alt="" />
          <p>
            I' am a React developer from, Nigeria with 2 years of experience in
            companies like In8level, UK London
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; Prominent Ikechukwu. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;