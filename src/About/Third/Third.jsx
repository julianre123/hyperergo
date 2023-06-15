import React from "react";
import "./Third.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import man from "../../assets/HYPERERGO images/About/man-2.jpg";

const Third = () => {
  return (
    <div className="about__third">
      <FormatQuoteIcon fontSize="large" className="about__icon" />
      <p>
        {" "}
        Hendrerit ac in aliquet sed etiam interdum ultricies pellentesque
        egestas convallis etiam elementum enim nisl cursus sit fames malesuada
        morbi arcu.
      </p>

      <div className="about__profile">
        <div className="about__profile__image">
          <img src={man} alt="" />
        </div>
        <div className="about__profile__text">
          <p>Victor Sullivan</p>
          <p>Founder, CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Third;
