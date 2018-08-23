import * as actionTypes from "../utils/actionTypes";

export const onNumClick = number => {
  console.log("onNumClick", number);
  return {
    type: actionTypes.INPUT_NUMBER,
    number
  };
};

export const onPlusClick = () => {
  console.log("onPlusClick");
  return {
    type: actionTypes.PLUS
  };
};
