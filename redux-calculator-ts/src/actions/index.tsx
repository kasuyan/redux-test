import { Action } from "redux";
import * as actionTypes from "../utils/actionTypes";

interface INum extends Action {
  type: string;
  payload: {
    num: number;
  };
}
export const onNumClick = (num: number): INum => ({
  payload: {
    num
  },
  type: actionTypes.INPUT_NUMBER
});

interface IPLUS extends Action {
  type: string;
}

export const onPlusClick = (): IPLUS => ({
  type: actionTypes.PLUS
});
