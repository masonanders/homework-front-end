import React from "react";
import { randomColor } from '../util/components_util';
import "../stylesheets/gifs.scss";

const GifsList = props => {
  const gifs = props.gifs.map((gif, idx) => (
    <img
      onClick={() => props.setCurrentGif(idx)}
      className="gif"
      style={{ backgroundColor: randomColor() }}
      key={idx}
      src={gif.images.fixed_width.url}
      alt={gif.title}
    />
  ));

  const handleGenerateMore = () => {
    props.generateMore(props.search, props.offset + 15);
  };

  const generateMoreButton = gifs.length ? (
    <button onClick={() => handleGenerateMore()}>Generate more gifs</button>
  ) : null;

  return (
    <div className="gifs-body">
      <div className="gifs-container">{gifs}</div>
      {generateMoreButton}
    </div>
  );
};

export default GifsList;
