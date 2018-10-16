import React from "react";
import "../stylesheets/gifs.scss";

const GifsList = props => {
  const gifs = props.gifs.map((gif, idx) => (
    <img
      className="gif"
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
