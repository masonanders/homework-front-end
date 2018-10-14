import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store";

document.addEventListener("DOMContentLoaded", () => {
  const preState = sessionStorage.preState ? sessionStorage.getItem('preState') : {};
  const store = configureStore(preState);
  
  ReactDOM.render(<App store={store}/>, document.getElementById("root"));
});
