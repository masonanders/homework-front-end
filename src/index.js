import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store";

import axios from 'axios';
import { searchGifs, trendingGifs, clearGifs } from "./actions/gifs_actions";

document.addEventListener("DOMContentLoaded", () => {
  const preState = sessionStorage.preState
    ? sessionStorage.getItem("preState")
    : {};
  const store = configureStore(preState);
  ReactDOM.render(<App store={store} />, document.getElementById("root"));

  // Development
  window.store = store;
  window.axios = axios;
  window.searchGifs = searchGifs;
  window.trendingGifs = trendingGifs;
  window.clearGifs = clearGifs;
});
