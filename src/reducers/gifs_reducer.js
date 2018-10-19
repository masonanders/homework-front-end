import {
  RECEIVE_GIFS,
  RECEIVE_MORE_GIFS,
  CLEAR_GIFS
} from "../actions/gifs_actions.js";

export default (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GIFS:
      return action.data.data.data;
    case RECEIVE_MORE_GIFS:
      return oldState.concat(action.data.data.data);
    case CLEAR_GIFS:
      return [];
    default:
      return oldState;
  }
};
