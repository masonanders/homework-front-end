import { RECEIVE_GIFS, CLEAR_GIFS } from "../actions/gifs_actions";

export default (oldState = 0, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GIFS:
      return action.offset;
    case CLEAR_GIFS:
      return 0;
    default:
      return oldState;
  }
};
