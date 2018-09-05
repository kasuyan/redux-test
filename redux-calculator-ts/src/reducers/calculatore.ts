import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions";

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false
};

export default reducerWithInitialState(initialAppState).case(
  actions.inputNumer,
  (state, payload) => {
    return {
      ...state,
      inputValue: state.inputValue * 10,
      showingResult: false
    };
  }
);

// import * as actionTypes from "../utils/actionTypes";

// const initialAppState = {
//   inputValue: 0,
//   resultValue: 0,
//   showingResult: false
// };

// const caluclator = (state = initialAppState, actions: Action) => {
//   if (actions.type === actionTypes.INPUT_NUMBER) {
//     return {
//       ...state,
//       inputValue: state.inputValue * 10 + actions.type,
//       showingResult: false
//     };
//   } else if (actions.type === actionTypes.PLUS) {
//     return {
//       ...state,
//       inputValue: 0,
//       resultValue: state.resultValue + state.inputValue,
//       showingResult: true
//     };
//   } else {
//     return state;
//   }
// };

// export default caluclator;
