import React, { useEffect, useState } from "react";
import AnswerComponent from "../../Components/AnswerComponent";
import QuizComponent from "../../Components/QuizComponent";
import { addingNewQuiz, removeAllCorrectAnswers, removeAllOptions } from "../../redux/Actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import DisplayQuizComponent from "../../Components/DisplayQuizComponent";

const CreateQuiz = () => {
  const initialQuizState = {
    id: null,
    question: "",
    type: "",
    options: [],
    correctAnswer: "",
  };

  const [quiz, setQuiz] = useState(initialQuizState);

  const [quizQuestion, setQuizQuestion] = useState("");



  const quizState = useSelector(state => state.quizReducer);
  const quizValues = useSelector(state => state.getQuizReducer.data);
  const answerOptions = useSelector(state => state?.answerReducer);
  const correctAnswerValues = useSelector(state => state.correctAnswerReducer);

  const dispatch = useDispatch();


  useEffect(() => {
    if (quizQuestion && answerOptions.length > 0) {
      dispatchActionHandler();
      setQuizQuestion("");
      dispatch(removeAllOptions())
      dispatch(removeAllCorrectAnswers())
    }
  }, [quiz]);

  const dispatchActionHandler = () => {
    dispatch(addingNewQuiz(quiz));
  };

  const createQuizHandler = () => {
    setQuiz({ ...quiz, question: quizQuestion, type: quizState.type,options: answerOptions,correctAnswer: correctAnswerValues });
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

          {quizValues && quizValues.map(quiz=>(
            <DisplayQuizComponent key={quiz.id} id={quiz.id} answers={quiz.correctAnswer} question={quiz.question} options={quiz.options} type={quiz.type} />
          ))}



          <QuizComponent
            setQuizQuestion={setQuizQuestion}
            quizQuestion={quizQuestion}
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
