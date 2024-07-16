import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import Doctor from "../Assets/fac3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 600);
    };

    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-title">Galvanotech Surfin Private Limited</p>
          <h2 className="text-headline">Next Gen Technologies</h2>
          <p className="text-descritpion">
            Galvanotech Surfin Private Limited, is an Organization founded by Technocrats and professionals with rich experience in Surface Finishing Technologies.
            <br />
            The mission is to Provide Sustainable Technology solutions and services to the industry. Professionals with experience in Indian and overseas markets supported by Industry experts lead the team.
            <br />
            We are the Industry heads and produce the most reliable and trendy solution you are looking for.
          </p>
        
          <div className="text-stats">
            <div className="text-stats-container">
              <CountUp start={0} end={130} duration={3} suffix="+" />
              <p>Product Manufacture</p>
            </div>

            <div className="text-stats-container">
              <CountUp start={0} end={25} duration={3} suffix="+" />
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Team at work" />
          {/* Updated the alt attribute with a more descriptive text */}
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
