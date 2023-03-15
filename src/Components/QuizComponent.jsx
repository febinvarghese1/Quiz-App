import React from "react";
import { useSelector } from "react-redux";
import QuizTypeComponent from "./QuizTypeComponent";

const QuizComponent = ({setQuizQuestion,quizQuestion}) => {
  const quizQuestionInputHandler = (e) => {
    setQuizQuestion(e.target.value);
  };
  const quizData = useSelector(state => state.getQuizReducer.data);
  return (
    <div className="singlequiz">
      <div>
        {quizData.slice(-1)[0]?.id > 0 ? quizData.slice(-1)[0]?.id+1: 1}
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
