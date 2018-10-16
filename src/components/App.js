import React, { Component } from "react";
import "../stylesheets/reset.css";
import "../stylesheets/base.scss";

import Searchbar from "./search_container";
import GifsList from "./gifs_container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar store={this.props.store} />
        <GifsList store={this.props.store}/>
      </div>
    );
  }
}

export default App;
