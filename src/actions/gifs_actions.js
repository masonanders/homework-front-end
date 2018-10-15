import { searchGifs } from "../util/gifs_util";

const RECEIVE_GIFS = "RECEIVE_GIFS";

const receiveGifs = (data, search) => ({
  type: RECEIVE_GIFS,
  data,
  search
});

const searchGifs = (search, offset) => dispatch => {
  const searchString = search.split(" ").join("+");
  searchGifs(searchString, offset).then(
    res => dispatch(receiveGifs(res, search)),
    err => console.error(err)
  );
};
