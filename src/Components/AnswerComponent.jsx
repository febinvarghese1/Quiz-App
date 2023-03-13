import React from "react";
import ButtonComponent from "../Components/ButtonComponent";
import AnswerOptions from "./AnswerOptions";
const AnswerComponent = () => {
  return (
    <div className="answer">
      <h1>Creating Answer Options</h1>
      <div className="answer__container">
        <h1>Question</h1>
        <AnswerOptions />
        <div className="answer--btn">

        <ButtonComponent  value="Add New option" />
        </div>
      </div>
    </div>
  );
};

export default AnswerComponent;
