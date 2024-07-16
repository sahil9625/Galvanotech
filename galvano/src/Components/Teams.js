import React from "react";
import TeamCard from "./TeamCard";
import profile1 from "../Assets/h1.jpg";
import profile2 from "../Assets/h5.jpg";
import profile3 from "../Assets/h2.jpg";
import profile4 from "../Assets/h6.jpg";
import profile5 from "../Assets/h3.jpg";
import profile6 from "../Assets/h4.jpg";


import "../Styles/Teams.css";

function Teams() {
  return (
    <div className="Team-section" id="Teams">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team 
        </p>
      </div>

      <div className="dt-cards-content">
        <TeamCard
          img={profile1}
          name="Mr.Sanjeev Chauhan"
          title="Director"
  
        
        />
        <TeamCard
          img={profile2}
          name="Mr.Rahul Chauhan"
          title="Co.Director"
  
      
        />
        <TeamCard
          img={profile3}
          name="Mr.Rajesh kumaar Rana"
          title="President"
  
      
        />
        <TeamCard
          img={profile4}
          name="Mr.Satish Awashti"
          title="Senior Manager"
      
      
        />
        <TeamCard
          img={profile5}
          name="Mr.Pawan Kumar"
          title="Senior Manager"
      
      
        />
        <TeamCard
          img={profile6}
          name="Mr.Navneet Tyagi"
          title="Senior Manager"
  
      
        />
      </div>
    </div>
  );
}

export default Teams;
