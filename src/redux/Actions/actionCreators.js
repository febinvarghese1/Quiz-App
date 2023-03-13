import { constants } from "../Constants/Constants"



export const fetchQuizRequest = () =>{
    return {
        type: constants.FETCH_QUIZ_REQUEST
    }
}


export const fetchQuiz = quiz =>{
    return {
        type: constants.FETCH_QUIZ_DATA,
        payload: quiz
    }
}