export default (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    default:
      return oldState;
  }
};
