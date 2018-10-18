import { fetchSearchGifs, fetchTrendingGifs } from "../util/gifs_util";

export const RECEIVE_GIFS = "RECEIVE_GIFS";
export const RECEIVE_MORE_GIFS = "RECEIVE_MORE_GIFS";
export const CLEAR_GIFS = "CLEAR_GIFS";
export const SET_CURRENT_GIF = "SET_CURRENT_GIF";
export const CLEAR_CURRENT_GIF = "CLEAR_CURRENT_GIF";

const receiveGifs = (data, search) => ({
  type: RECEIVE_GIFS,
  data,
  search
});

const receiveMoreGifs = (data, offset) => ({
  type: RECEIVE_MORE_GIFS,
  data,
  offset
});

export const searchGifs = search => dispatch => {
  const searchString = search.split(" ").join("+");
  return fetchSearchGifs(searchString).then(
    res => dispatch(receiveGifs(res, search)),
    err => console.error(err)
  );
};

export const trendingGifs = () => dispatch =>
  fetchTrendingGifs().then(
    res => dispatch(receiveGifs(res, "")),
    err => console.error(err)
  );

export const generateMore = (search, offset) => dispatch => {
  if (search) {
    const searchString = search.split(" ").join("+");
    return fetchSearchGifs(searchString, offset).then(
      res => dispatch(receiveMoreGifs(res, offset)),
      err => console.error(err)
    );
  } else {
    fetchTrendingGifs(offset).then(
      res => dispatch(receiveMoreGifs(res, offset)),
      err => console.error(err)
    );
  }
};

export const clearGifs = () => dispatch =>
  new Promise(res => res()).then(() => dispatch({ type: CLEAR_GIFS }));

export const setCurrentGif = idx => dispatch =>
  new Promise(res => res()).then(() =>
    dispatch({ type: SET_CURRENT_GIF, idx })
  );

export const clearCurrentGif = () => dispatch =>
  new Promise(res => res()).then(() => dispatch({ type: CLEAR_CURRENT_GIF }));
