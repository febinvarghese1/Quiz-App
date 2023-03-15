import { constants } from "../Constants/constants";



let singleQuiz = {
    value:{}
};





export const singleQuizReducer = (state = singleQuiz, action) =>{
    switch(action.type){
        case constants.FETCH_QUIZ_BY_ID:
        return {value: action.payload}
        default:
            return state;
    }
}