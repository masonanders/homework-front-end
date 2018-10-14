import { combineReducers } from "redux";

import gifs from './gifs_reducer';
import currentGif from './currentGif_reducer';
import search from "./search_reducer";

export default combineReducers({
  gifs,
  currentGif,
  search
});
