import React from "react";
import { randomColor } from "../util/components_util";
import "../stylesheets/gifs.scss";
import InfiniteScroll from "react-infinite-scroller";

const GifsList = props => {
  const gifs = props.gifs.map((gif, idx) => (
    <img
      id={gif.id}
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

  return (
    <div className="gifs-body">
      <InfiniteScroll
        className="gifs-container"
        loadMore={() => handleGenerateMore()}
        initialLoad={false}
        hasMore={gifs.length > 0 ? true : false}
        threshold={100}
      >
        {gifs}
      </InfiniteScroll>
    </div>
  );
};

export default GifsList;
