import { constants } from "../Constants/constants";




const correctAnswer = []



export const correctAnswerReducer = (state=correctAnswer,action) =>{
    switch(action.type){
        case constants.SET_CORRECT_ANSWER:
            return [...state,action.payload]
        case constants.REMOVE_CORRECT_ANSWER:
            return state.filter(correctAns =>{
                return correctAns != action.payload
            })
        
        case constants.REMOVE_ALL_CORRECT_ANSWERS:
            return []
        default:
            return state;
    }
}

