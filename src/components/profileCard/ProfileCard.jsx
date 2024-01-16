import React from "react";
import PropTypes from "prop-types";
import "./profileCard.style.css";
import { MyButton } from "../myButton/MyButton";

const ProfileCard = ({ studentsInfo: { firstName, job, imgSrc } }) => {
  const onClickHandler = () => {
    alert(`Hi ${firstName}`);
  };
  return (
    <div>
      <div className="empInfo">
        <img src={imgSrc} width={"100%"} alt="Individual" />
        <h5>{firstName}</h5>
        <h6>{job}</h6>
        <MyButton
          text={"Click"}
          onClickHandler={onClickHandler}
          variant={"rounded"}
        />
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default ProfileCard;
