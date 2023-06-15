import React from "react";
import "./Second.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const Second = () => {
  return (
    <div className="contact__second">
      <div className="contact__touch">
        <h1>Get in touch</h1>
        <div className="touch__address">
          <LocationOnIcon fontSize="small" className="address__icon" />
          <div className="touch__address__text">
            <p>Address</p>
            <p>123 Demo St, San Francisco, CA 45678, United States</p>
          </div>
        </div>
        <h2>Customer service</h2>
        <p>
          Diam id quis quam pulvinar sodales fermentum, elit risus tristique
          praesent sit dictumst vel amet.
        </p>
        <div className="touch__customer">
          <LocalPhoneIcon className="address__icon" fontSize="small" />
          <p>+1 123-456-7890</p>
        </div>
        <div className="touch__customer">
          <EmailIcon className="address__icon" fontSize="small" />
          <p>julire2011@hotmail.com</p>
        </div>
        <div className="touch__customer">
          <WatchLaterIcon className="address__icon" fontSize="small" />
          <p>08.00 - 16.00 EST</p>
        </div>
      </div>

      <div className="contact__form">
        <div className="contact__border"></div>
        <div className="contact__form__input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="contact__form__input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="contact__form__input">
          <label htmlFor="message">Comment or Message</label>
          <textarea name="message" id="message" cols="30" rows="5"></textarea>
        </div>
        <button className="btn contact__btn">Submit</button>
      </div>
    </div>
  );
};

export default Second;
