import React from "react";

const Header = () => (
  <div className="Title">
    <img
      src="https://36711.apps.zdusercontent.com/36711/assets/1506469900-fd7a54462c6615af92812b8a1a25884b/logo.png"
      alt="Giphy Logo"
    />
    <h1>GIPHY Search</h1>
  </div>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleInputValue(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleSearch() {
    const search = this.state.value;
    if (this.state.value) this.props.clearGifs().then(() => this.props.searchGifs(search));
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSearch();
    } else {
      this.handleInputValue(e);
    }
  }

  render() {
    return (
      <div className="Header">
        <Header />
        <div className="Searchbar">
          <input
            onChange={e => this.handleInputValue(e)}
            onKeyPress={e => this.handleKeyPress(e)}
            type="search"
            value={this.state.value}
            placeholder="Search for gifs!"
          />
          <button onClick={() => this.handleSearch()} />
        </div>
      </div>
    );
  }
}

export default Search;
