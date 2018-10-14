import React, { Component } from "react";
import "../stylesheets/reset.css";
import "../stylesheets/base.scss";
import "../stylesheets/header.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Header'>
          <div className="Title">
            <img src="https://36711.apps.zdusercontent.com/36711/assets/1506469900-fd7a54462c6615af92812b8a1a25884b/logo.png" alt='Giphy Logo'/>
            <h1>GIPHY Search</h1>
          </div>
          <div className="Searchbar">
            <input type="search" placeholder="Search for gifs!" />
            <button />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
