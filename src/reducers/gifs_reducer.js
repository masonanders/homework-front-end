export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch (action.type) {
    default:
      return oldState;
  }
};