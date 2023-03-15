import { constants } from "../Constants/constants";


const quizState = {
    type: "dropdown",
}


export const quizReducer = (state=quizState,action) =>{
    switch(action.type){
        case constants.ADD_QUESTION_TYPE:
            return {...state,type:action.payload}
       
       
        default:
            return state;
    }
}