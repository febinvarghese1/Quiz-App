import React from "react";
import QuizTypeComponent from "./QuizTypeComponent";

const QuizComponent = () => {
  return (
    <div className="singlequiz">
      <div>
      <input
        className="singlequiz__question"
        placeholder="Enter The question"
        type="text"
      />
      <p>Select the question type</p>
      <QuizTypeComponent />
      </div>
      
    </div>
  );
};

export default QuizComponent;
