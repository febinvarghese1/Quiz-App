import React from "react";
import QuizTypeComponent from "./QuizTypeComponent";

const QuizComponent = ({setQuizQuestion,quizQuestion}) => {
  const quizQuestionInputHandler = (e) => {
    setQuizQuestion(e.target.value);
  };
  return (
    <div className="singlequiz">
      <div>
        <input
          className="singlequiz__question"
          placeholder="Enter The question"
          type="text"
          value={quizQuestion}
          onChange={quizQuestionInputHandler}
        />
        <p>Select the question type</p>
        <QuizTypeComponent />
      </div>
    </div>
  );
};

export default QuizComponent;
