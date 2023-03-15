import { constants } from "../Constants/constants"


const initialState = {
    data:[]
}


export const getQuizReducer = (state=initialState,action) => {
    switch(action.type){
        case constants.FETCH_QUIZ_DATA:
            return {
                data: action.payload
            }
            case constants.ADD_A_QUIZ:
                return{
                    data: [...state.data,action.payload]
                }
        default:
            return state
        }
}