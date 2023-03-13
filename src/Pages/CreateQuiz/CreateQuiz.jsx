import React from "react";
import AnswerComponent from "../../Components/AnswerComponent";
import QuizComponent from "../../Components/QuizComponent";
import ButtonComponent from "../../Components/ButtonComponent";

const CreateQuiz = () => {
  return (
    <div>
      <h1 className="quiz--heading">Create a Quiz</h1>
      <div className="quiz">
        <div className="quiz__left">
          <h1 className="quiz__left_heading">Quiz name</h1>
          <input
            className="quiz__left_inputname"
            type="text"
            placeholder="Enter Quiz Name"
          />
          <h1 className="quiz__left_heading">Questions</h1>

          <QuizComponent />
          
          <div className="quiz--btn">
            <ButtonComponent value="Add new question" />
          </div>
        </div>
        <div className="quiz__right">
          <AnswerComponent />
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
