import { SET_CURRENT_GIF, CLEAR_CURRENT_GIF } from "../actions/gifs_actions";

export default (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case SET_CURRENT_GIF:
      return action.idx;
    case CLEAR_CURRENT_GIF:
      return null;
    default:
      return oldState;
  }
};
