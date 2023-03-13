import { constants } from "../Constants/Constants"


const initialState = {
    loading: true,
    data:[],
    
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        case constants.FETCH_QUIZ_REQUEST:
            return {
                ...state,
                loading: true
            }
        case constants.FETCH_QUIZ_DATA:
            return {
                loading: false,
                data: action.payload
            }
        default:
            return state
        }
}