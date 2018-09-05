import actionCreatorFactory from "typescript-fsa";
import * as actionTypes from "../utils/actionTypes";
const actionCreator = actionCreatorFactory();

export const inputNumer = actionCreator<number>(actionTypes.INPUT_NUMBER);
export const puls = actionCreator(actionTypes.PLUS);
