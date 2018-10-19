import {
  RECEIVE_GIFS,
  RECEIVE_MORE_GIFS,
  CLEAR_GIFS
} from "../actions/gifs_actions";

export default (oldState = 0, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GIFS:
      return 0;
    case RECEIVE_MORE_GIFS:
      return action.offset;
    case CLEAR_GIFS:
      return 0;
    default:
      return oldState;
  }
};
