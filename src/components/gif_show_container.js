import { connect } from "react-redux";
import GifShow from "./gif_show";
import { clearCurrentGif } from "../actions/gifs_actions";

const mapStateToProps = state => ({
  gif: state.gifs[state.currentGif]
});

const mapDispatchToProps = dispatch => ({
  clearCurrentGif: () => dispatch(clearCurrentGif())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifShow);
