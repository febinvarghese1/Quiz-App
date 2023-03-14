import React, { useEffect, useState } from "react";
import AnswerComponent from "../../Components/AnswerComponent";
import QuizComponent from "../../Components/QuizComponent";
import { addingNewQuiz } from "../../redux/Actions/actionCreators";
import { useDispatch } from "react-redux";

const CreateQuiz = () => {
  const initialQuizState = {
    id: null,
    question: "",
    type: "",
    options: "",
    correctAnswer: "",
  };

  const [quiz, setQuiz] = useState(initialQuizState);

  const [quizQuestion, setQuizQuestion] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (quizQuestion) {
      dispatchActionHandler();
    }
  }, [quiz]);

  const dispatchActionHandler = () => {
    dispatch(addingNewQuiz(quiz)).then((data) => console.log(data));
  };

  const createQuizHandler = () => {
    setQuiz({ ...quiz, question: quizQuestion });
  };

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

          <QuizComponent
            setQuiz={setQuiz}
            setQuizQuestion={setQuizQuestion}
            quizQuestion={quizQuestion}
            quiz={quiz}
          />

          <div className="quiz--btn">
            <button onClick={createQuizHandler} className="mainButton">
              Add new question
            </button>
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
