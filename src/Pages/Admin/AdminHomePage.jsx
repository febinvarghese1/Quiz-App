import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import PreviousQuiz from "../../Components/PreviousQuiz";

const AdminHomePage = () => {
  return (
    <div className="admin">
      <h1 className="admin__heading">Admin Pannel</h1>
      <div className="admin__container">
        <div className="admin__container_top">
          <h1>All Quizes</h1>
          <NavLink to="CreateQuiz">
          <ButtonComponent value={"New Quiz"} />
          </NavLink>
        </div>
        <div className="admin__container_bottom">
          <div className="admin__container_bottom_heading">
            <h3>Name</h3>
            <h4>No.of Questions</h4>
          </div>
          <PreviousQuiz name="quiz1" questions="10" />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
