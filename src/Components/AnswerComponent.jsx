import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonComponent from "../Components/ButtonComponent";
import AnswerOptions from "./AnswerOptions";
import DisplayOptions from "./DisplayOptions";
const AnswerComponent = () => {
  const quizAnswers = useSelector((state) => state.answerReducer);
  const [showOptions, setShowOptions] = useState(false);

  const onClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="answer">
      <h1>Creating Answer Options</h1>
      <div className="answer__container">
        <h1>Question</h1>
        {quizAnswers &&
          quizAnswers?.map((answers, index) => (
            <DisplayOptions id={index} key={index} answers={answers} />
          ))}
        {!showOptions && <AnswerOptions />}

        <div className="answer--btn">
          {quizAnswers.length > 0 && (
            <ButtonComponent
              onClick={onClick}
              value={!showOptions ? "Complete Options" : "Add Options"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerComponent;
