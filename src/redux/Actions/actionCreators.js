import { constants } from "../Constants/constants";
import {
  createNewQuiz,
  getAllQuiz,
  getQuizById,
} from "../services/quizServices";

export const fetchQuizData = (quiz) => {
  return {
    type: constants.FETCH_QUIZ_DATA,
    payload: quiz,
  };
};

export const addNewtype = (type) => {
  return {
    type: constants.ADD_QUESTION_TYPE,
    payload: type,
  };
};

export const addNewOption = (answerOption) => {
  return {
    type: constants.ADD_ANSWER_OPTION,
    payload: answerOption,
  };
};

export const removeOption = (answer) =>{
  return {
    type: constants.REMOVE_OPTION,
    payload: answer
  }
} 

export const removeAllOptions = () => {
  return {
    type: constants.REMOVE_ALL_OPTIONS,
  };
};

export const setCorrectAnswer = (correctAns) => {
  return {
    type: constants.SET_CORRECT_ANSWER,
    payload: correctAns,
  };
};


export const removeCorrectAnswer = (id) =>{
  return {
    type: constants.REMOVE_CORRECT_ANSWER,
    payload: id
  }
}

export const removeAllCorrectAnswers = () =>{
  return {
    type: constants.REMOVE_ALL_CORRECT_ANSWERS,
  }
}

// export const addQuizName = () =>{
//     return (dispatch) =>{
//         axios.post("http://localhost:5500/quizes")
//         .then()
//     }
// }

export const fetchQuizes = () => {
  return async (dispatch) => {
    const quizes = await getAllQuiz();
    dispatch(fetchQuizData(quizes.data));
  };
};

export const fetchSingleQuiz = (id) => async (dispatch) => {
  try {
    const result = await getQuizById(id);
    dispatch({
      type: constants.FETCH_QUIZ_BY_ID,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addingNewQuiz = (quizData) => async (dispatch) => {
  try {
    const result = await createNewQuiz(quizData);
    dispatch({
      type: constants.ADD_A_QUIZ,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
