import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store";

import axios from 'axios';
import { searchGifs, trendingGifs } from "./util/gifs_util";

document.addEventListener("DOMContentLoaded", () => {
  const preState = sessionStorage.preState
    ? sessionStorage.getItem("preState")
    : {};
  const store = configureStore(preState);
  window.axios = axios;
  window.searchGifs = searchGifs;
  window.trendingGifs = trendingGifs;
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
});
