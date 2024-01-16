import React from "react";
import "./studentsView.style.css";
import { studentsList } from "../assets/data/studentsList";
import ProfileCard from "../profileCard/ProfileCard";

const StudentsView = () => {
  return (
    <div className="studentsView-box">
      {studentsList.map((el, index) => (
        <ProfileCard
          key={index}
          firstName={el.firstName}
          job={el.job}
          favoriteColor={el.favoriteColor}
          imgSrc={el.imgSrc}
        />
      ))}
    </div>
  );
};

export default StudentsView;
