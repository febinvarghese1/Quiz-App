import React from "react";
import {TiTick} from "react-icons/ti"

const AnswerOptions = () => {
  return (
    <div className="answer__container_input">
      <input placeholder="add a new option" />
      <i><TiTick /></i>
    </div>
  );
};

export default AnswerOptions;
