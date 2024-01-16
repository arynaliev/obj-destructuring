import React from "react";
import "./studentsView.style.css";
import { studentsList } from "../assets/data/studentsList";
import ProfileCard from "../profileCard/ProfileCard";

const StudentsView = () => {
  return (
    <div className="studentsView-box">
      {studentsList.map((el, index) => (
        <ProfileCard key={index} studentsInfo={el} />
      ))}
    </div>
  );
};

export default StudentsView;
