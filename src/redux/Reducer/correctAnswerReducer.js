import { constants } from "../Constants/constants";




const correctAnswer = []



export const correctAnswerReducer = (state=correctAnswer,action) =>{
    switch(action.type){
        case constants.SET_CORRECT_ANSWER:
            return [...state,action.payload]
        case constants.REMOVE_CORRECT_ANSWER:
            console.log(state.filter(correct=> correct.id != action.payload), action.payload)
            return state.filter(correct =>{
                return correct.id != action.payload
            })
        
        case constants.REMOVE_ALL_CORRECT_ANSWERS:
            return []
        default:
            return state;
    }
}

