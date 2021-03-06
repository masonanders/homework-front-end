import React from "react";
import "../stylesheets/header.scss";
import logo from "../giphy_logo.png";

const Header = () => (
  <div className="title">
    <img
      src={logo}
      alt="Giphy Logo"
    />
    <h1>GIPHY Search</h1>
  </div>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.search || "" };
  }

  handleInputValue(e) {
    const value = e.target.value;
    if (!e.target.value) this.props.clearGifs();
    this.setState({ value });
  }

  handleSearch() {
    const search = this.state.value;
    if (this.state.value) this.props.searchGifs(search);
  }

  handleTrending() {
    this.setState({ value: "" });
    this.props.trendingGifs();
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSearch();
    } else {
      this.handleInputValue(e);
    }
  }

  render() {
    const floatClass = this.props.gifs.length ? " float" : "";
    return (
      <div className={"header" + floatClass}>
        <Header />
        <div className="search-container">
          <div className="searchbar">
            <input
              onChange={e => this.handleInputValue(e)}
              onKeyPress={e => this.handleKeyPress(e)}
              type="search"
              value={this.state.value}
              placeholder="Search for gifs!"
            />
            <button onClick={() => this.handleSearch()} />
          </div>
          <button
            className="see-trending"
            onClick={() => this.handleTrending()}
          >
            {this.props.gifs.length ? "Trending" : "Whats trending?"}
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
