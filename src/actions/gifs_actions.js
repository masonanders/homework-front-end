import { fetchSearchGifs, fetchTrendingGifs } from "../util/gifs_util";

export const RECEIVE_GIFS = "RECEIVE_GIFS";
export const CLEAR_GIFS = "CLEAR_GIFS";

const receiveGifs = (data, search, offset) => ({
  type: RECEIVE_GIFS,
  data,
  search,
  offset
});

export const searchGifs = (search, offset = 0) => dispatch => {
  const searchString = search.split(" ").join("+");
  return fetchSearchGifs(searchString, offset).then(
    res => dispatch(receiveGifs(res, search, offset)),
    err => console.error(err)
  );
};

export const trendingGifs = (offset = 0) => dispatch =>
  fetchTrendingGifs(offset).then(
    res => dispatch(receiveGifs(res, null, offset)),
    err => console.error(err)
  );

export const generateMore = (search, offset) => dispatch => {
  if (search) {
    searchGifs(search, offset)(dispatch);
  } else {
    trendingGifs(offset)(dispatch);
  }
};

export const clearGifs = () => dispatch =>
  new Promise(res => res()).then(() => {
    dispatch({ type: CLEAR_GIFS });
  });
