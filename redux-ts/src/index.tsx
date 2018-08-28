/* tslint:disable:no-console */
import { createStore } from "redux";

// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import { connect, Provider } from "react-redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const MODULE_NAME = "hoge";
const actionCreator = actionCreatorFactory(`@@${MODULE_NAME}/`);

// ActionCreator Actionを返す関数
// interface ImyAction1 extends Action {
//   type: "INC_COUNTER";
//   num: number;
// }

// const myActionCreator1 = (num: number = 1): ImyAction1 => {
//   // Action
//   return {
//     num,
//     type: "INC_COUNTER"
//   };
// };

const myAction1 = actionCreator<number>("INC_COUNTER");
const myAction2 = actionCreator<string>("NAME");

// const myActionCreator2 = (str: string = "糟谷です") => {
//   // Action
//   return {
//     str,
//     type: "NAME"
//   };
// };

// const myActionCreator3 = (num1: number, num2: number) => {
//   // Action
//   return {
//     num1,
//     num2,
//     type: "NUM"
//   };
// };

// Reducer
const initialState = {
  counter: 0,
  name: "HOGE"
};
const hoge = reducerWithInitialState(initialState)
  .case(myAction1, (state, payload) => {
    console.log("state=", state);
    console.log("payload=", payload);
    return {
      ...state,
      counter: state.counter + payload
    };
  })
  .case(myAction2, (state, payload) => {
    console.log("state=", state);
    console.log("payload=", payload);
    return {
      ...state,
      name: payload
    };
  });

const myStore = createStore(hoge);

console.log(myStore.getState()); // { counter: 0 }
myStore.dispatch(myAction1(1));
myStore.dispatch(myAction1(2));
myStore.dispatch(myAction2("糟谷"));
console.log(myStore.getState()); // { counter: 3 }

// const myReducer = (
//   state = { counter: 0, str: "", total: 0 },
//   action: ImyAction1
// ) => {
//   switch (action.type) {
//     case "INC_COUNTER":
//       return Object.assign({}, state, {
//         counter: state.counter + action.num
//       });
//     // case "NAME":
//     //   return Object.assign({}, state, {
//     //     str: action.str
//     //   });
//     // case "NUM":
//     //   return Object.assign({}, state, {
//     //     total: action.num1 + action.num2
//     //   });
//     default:
//       return state;
//   }
// };

// const myStore = createStore(hogeReducer);

// interface IProps {
//   counter: number;
//   str: string;
//   incCounter: () => number;
// }

// class App extends React.Component<IProps, {}> {
//   public render() {
//     return (
//       <div>
//         <p>
//           値：
//           {this.props.counter}
//         </p>
//         <p>{this.props.str}</p>
//         <button
//           onClick={() => {
//             this.props.incCounter();
//           }}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: IProps) => {
//   return {
//     counter: state.counter,
//     name: state.str
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     incCounter(value: number) {
//       dispatch(myActionCreator1(value));
//     }
//   };
// };

// const ConnectedApp = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

// ReactDOM.render(
//   <Provider store={myStore}>
//     <ConnectedApp />
//   </Provider>,
//   document.querySelector("#root")
// );
