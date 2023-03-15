import { combineReducers } from "redux";
import { getQuizReducer } from "./getQuizReducer";
import { quizReducer } from "./quizReducer";
import { singleQuizReducer } from "./singleQuizReducer";
import { answerReducer } from "./answerReducer";
import { correctAnswerReducer } from "./correctAnswerReducer";
export const rootReducer = combineReducers({
    getQuizReducer,
    quizReducer,
    singleQuizReducer,
    answerReducer,
    correctAnswerReducer
})