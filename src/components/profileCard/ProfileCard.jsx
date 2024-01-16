import React from "react";
import "./profileCard.style.css";

const ProfileCard = (props) => {
  return (
    <div>
      <div className="empInfo">
        <img src={props.imgSrc} width={"100px"} alt="Individual" />
        <h5>{props.firstName}</h5>
        <h6>{props.job}</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
