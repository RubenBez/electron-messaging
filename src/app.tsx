import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import "./index.css";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

function increase() {
  return INCREASE;
}

function decrease() {
  return DECREASE;
}

function counter(state = 0, action: any) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(counter);

ReactDOM.render(
  <button onClick={() => store.dispatch(increase())}>Increase</button>,
  document.getElementById("root")
);
