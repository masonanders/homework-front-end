import React from "react";
import "../stylesheets/gifs.scss";

const GifsList = props => {
  const randomColor = () => {
    let randNum = () => Math.ceil(Math.random() * 255);
    if (randNum < 100) randNum += 100;
    return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
  };

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
