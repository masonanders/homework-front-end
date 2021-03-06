import { connect } from "react-redux";
import GifsList from "./gifs_list";
import { generateMore, setCurrentGif } from "../actions/gifs_actions";

const mapStateToProps = state => ({
  gifs: state.gifs,
  search: state.search,
  offset: state.offset
});

const mapDispatchToProps = dispatch => ({
  generateMore: (search, offset) => dispatch(generateMore(search, offset)),
  setCurrentGif: idx => dispatch(setCurrentGif(idx))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifsList);
