import { constants } from "../Constants/constants";

export const answerOptionState = [];

export const answerReducer = (state = answerOptionState, action) => {
  switch (action.type) {
    case constants.ADD_ANSWER_OPTION:
      if (state.length < 4 && !state.includes(action.payload)) {
        
        return [...state, action.payload];
      }else{
        return state
      }
    case constants.REMOVE_OPTION:
      return state.filter(option => {
        return option != action.payload.answers
      })
    case constants.REMOVE_ALL_OPTIONS:
      return [];

    default:
      return state;
  }
};

