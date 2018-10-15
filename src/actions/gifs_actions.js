import { fetchSearchGifs, fetchTrendingGifs } from "../util/gifs_util";

export const RECEIVE_GIFS = "RECEIVE_GIFS";
export const CLEAR_GIFS = "CLEAR_GIFS";

const receiveGifs = (data, search) => ({
  type: RECEIVE_GIFS,
  data,
  search
});

export const searchGifs = (search, offset) => dispatch => {
  const searchString = search.split(" ").join("+");
  return fetchSearchGifs(searchString, offset).then(
    res => dispatch(receiveGifs(res, search)),
    err => console.error(err)
  );
};

export const trendingGifs = offset => dispatch =>
  fetchTrendingGifs(offset).then(
    res => dispatch(receiveGifs(res, null)),
    err => console.error(err)
  );

export const clearGifs = () => dispatch =>
  new Promise(res => res()).then(() => {
    dispatch({ type: CLEAR_GIFS });
  });
