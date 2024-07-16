// About.js

import React from "react";
// import SolutionStep from "./SolutionStep"; // Make sure to import the necessary components
import "../Styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-text-content">
        <h2 className="about-title">About Us</h2>

        <p className="about-description">
          We are the industry heads and produce the most reliable and trendy solution you are looking for. Galvanotech Surfin Private Limited is an organization founded by technocrats and professionals with rich experience in Surface Finishing Technologies.
        </p>

        <p className="about-description">
          The mission is to provide sustainable technology solutions and services to the industry. Professionals with experience in Indian and overseas markets, supported by industry experts, lead the team.
        </p>

        <p className="about-description">
          Galvanotech Surfin has entered business partnerships with leading global players to offer the best-in-class technology solutions to industry and customers in the Asian Region and India in particular.
        </p>

        <p className="about-description">
          Quality comes first! We make sure that every minute detail is looked into while manufacturing even the smallest product. Our focus is 100% on client needs and satisfaction.
        </p>

        <h3 className="about-vision-title">Our Vision</h3>
        <p className="about-description">
          To be the industry leaders in the surface finishing industry by providing sustainable technology solutions. With the upcoming state-of-the-art manufacturing facility and Technology Centre equipped with the latest equipment, global standards of QA/QC & HSE, we ensure the supply of the highest quality products and customer support. Tie-ups with global leading raw material suppliers ensure uninterrupted supplies to our customers.
        </p>

        <h3 className="about-mission-title">Our Mission</h3>
        <p className="about-description">
          Establish partnership with our customers and stakeholders by delivering best-in-class technology and services. Experienced sales and technical support team located across pan India, backed by a central product management team and distribution network, offers prompt customer support with the highest level of technical competence. Our motto is to provide total solutions to our customers in Technology, Equipment, and the Surface finishing additives and chemicals.
        </p>
      </div>
    </section>
  );
}

export default About;
