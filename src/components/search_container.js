import { connect } from "react-redux";
import Search from "./search";

import { searchGifs, trendingGifs, clearGifs } from "../actions/gifs_actions";

const mapStateToProps = state => ({
  search: state.search,
  offset: state.offset,
  gifs: state.gifs
});

const mapDispatchToProps = dispatch => ({
  searchGifs: search => dispatch(searchGifs(search)),
  trendingGifs: () => dispatch(trendingGifs()),
  clearGifs: () => dispatch(clearGifs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
