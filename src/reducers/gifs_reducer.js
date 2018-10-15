import { RECEIVE_GIFS, CLEAR_GIFS } from "../actions/gifs_actions.js";

export default (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];

  switch (action.type) {
    case RECEIVE_GIFS:
      return oldState.concat(action.data.data.data);
    case CLEAR_GIFS:
      return [];
    default:
      return oldState;
  }
};
