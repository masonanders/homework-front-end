import axios from "axios";
import { giphy_API_key } from "../config/keys";

const gifsHost = "//api.giphy.com";
const gifsPath = "/v1/gifs/";
const limit = 10;

const generateURL = (type, offset = 0, search = null) => {
  const typeStr = `${type}?`;
  const apiKey = `api_key=${giphy_API_key}`;
  const limitStr = `&limit=${limit}`;
  const offsetStr = `&offset=${offset}`;
  const searchStr = search ? `&q=${search}` : "";
  return (
    gifsHost + gifsPath + typeStr + apiKey + limitStr + offsetStr + searchStr
  );
};

export const searchGifs = (searchString, offset = 0) =>
  axios.get(generateURL("search", offset, searchString));

export const trendingGifs = (offset = 0) =>
  axios.get(generateURL("trending", offset));
