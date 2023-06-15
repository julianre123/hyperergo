import React from "react";
import "./First.css";
const First = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="contact__first">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.062246498!2d-74.30932615182786!3d40.6970192907644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1685852122485!5m2!1ses-419!2sar"
        width={mobile ? "350" : "1200"}
        height={mobile ? "300" : "450"}
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default First;
