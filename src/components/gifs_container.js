import { connect } from "react-redux";
import GifsList from "./gifslist";
import { generateMore } from "../actions/gifs_actions";

const mapStateToProps = state => ({
  gifs: state.gifs,
  search: state.search,
  offset: state.offset
});

const mapDispatchToProps = dispatch => ({
  generateMore: (search, offset) => dispatch(generateMore(search, offset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifsList);
