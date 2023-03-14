import axios from "axios";
import { constants } from "../Constants/constants";
import { createNewQuiz } from "../services/quizServices";

export const fetchQuizData = (quiz) => {
  return {
    type: constants.FETCH_QUIZ_DATA,
    payload: quiz,
  };
};




// export const addQuizName = () =>{
//     return (dispatch) =>{
//         axios.post("http://localhost:5500/quizes")
//         .then()
//     }
// }




export const fetchQuizes = () => {
  return (dispatch) => {
    axios.get("http://localhost:5500/quizes").then((response) => {
      const quizes = response.data;
      dispatch(fetchQuizData(quizes));
    });
  };
};

export const addingNewQuiz = (quizData) => async (dispatch) => {
  try {
    const result = await createNewQuiz(quizData);
    dispatch({
        type:constants.ADD_A_QUIZ,
        payload: result.data
    })
  } catch (err) {
    console.log(err);
  }
};
