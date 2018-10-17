import { combineReducers } from "redux";

import gifs from "./gifs_reducer";
import currentGif from "./current_gif_reducer";
import search from "./search_reducer";
import offset from "./offset_reducer";

export default combineReducers({
  gifs,
  currentGif,
  search,
  offset
});
