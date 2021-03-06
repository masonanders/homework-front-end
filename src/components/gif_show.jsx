import React from "react";
import { randomColor } from "../util/components_util";
import "../stylesheets/gif_show.scss";

export default props => {
  const open = props.gif ? " open" : "";
  const gif = props.gif
    ? props.gif
    : {
        title: "",
        username: "",
        images: {
          fixed_width: { height: "1", width: "1" },
          original: { height: "1", width: "1" }
        }
      };
  const titleCutIdx = gif.title.split(" ").findIndex(el => el === "GIF");
  const title = gif.title
    .split(" ")
    .slice(0, titleCutIdx)
    .join(" ");
  const gifImage =
    window.innerWidth < 500 ? gif.images.fixed_width : gif.images.original;

  const handleClose = e => {
    if (e.target.className === "show-background open") {
      props.clearCurrentGif();
    }
  };

  return (
    <div className={"show-background" + open} onClick={e => handleClose(e)}>
      <div className="gif-modal">
        <img
          src={gifImage.url}
          alt={gif.title}
          style={{
            height: parseInt(gifImage.height),
            width: parseInt(gifImage.width),
            backgroundColor: randomColor()
          }}
        />
        <h1 onClick={() => window.open(gif.url)}>{title}</h1>
        {gif.username ? <p>by</p> : null}
        {gif.username ? (
          <h2 onClick={() => window.open(gif.user.profile_url)}>
            {gif.username}
          </h2>
        ) : null}
      </div>
    </div>
  );
};
