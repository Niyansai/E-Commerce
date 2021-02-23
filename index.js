import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./index.css";



ReactDOM.render(
  
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

