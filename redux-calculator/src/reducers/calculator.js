import * as actionTypes from "../utils/actionTypes";

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false
};

const caluclator = (state = initialAppState, action) => {
  console.log("reducers.caluclator", state, action);
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.number,
      showingResult: false
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue: state.resultValue + state.inputValue,
      showingResult: true
    };
  } else {
    return state;
  }
};

export default caluclator;
