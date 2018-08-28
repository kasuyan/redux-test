import { createStore } from "redux";

import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

// ActionCreator Actionを返す関数
const myActionCreator1 = (num = 1) => {
  // Action
  return {
    type: "INC_COUNTER",
    num
  };
};

const myActionCreator2 = (str = "糟谷です") => {
  // Action
  return {
    type: "NAME",
    str
  };
};

const myActionCreator3 = (num1, num2) => {
  // Action
  return {
    type: "NUM",
    num1,
    num2
  };
};

// Reducer
const myReducer = (state = { counter: 0, str: "", total: 0 }, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return Object.assign({}, state, {
        counter: state.counter + action.num
      });
    case "NAME":
      return Object.assign({}, state, {
        str: action.str
      });
    case "NUM":
      return Object.assign({}, state, {
        total: action.num1 + action.num2
      });
    default:
      return state;
  }
};

const myStore = createStore(myReducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          値：
          {this.props.counter}
        </p>
        <p>{this.props.str}</p>
        <button
          onClick={() => {
            this.props.incCounter(1);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    name: state.str
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incCounter(value) {
      dispatch(myActionCreator1(value));
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={myStore}>
    <ConnectedApp />
  </Provider>,
  document.querySelector("#root")
);
