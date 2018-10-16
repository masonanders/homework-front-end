import { connect } from "react-redux";
import Search from "./search";

import { searchGifs, trendingGifs, clearGifs } from "../actions/gifs_actions";

const mapStateToProps = state => ({
  search: state.search,
  offset: state.offset
});

const mapDispatchToProps = dispatch => ({
  searchGifs: (search, offset) => dispatch(searchGifs(search, offset)),
  trendingGifs: offset => dispatch(trendingGifs(offset)),
  clearGifs: () => dispatch(clearGifs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
