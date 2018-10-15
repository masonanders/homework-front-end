import { RECEIVE_GIFS, CLEAR_GIFS } from "../actions/gifs_actions.js";

export default (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GIFS:
      return action.search;
    case CLEAR_GIFS:
      return null;
    default:
      return oldState;
  }
};
