import React, { Component } from "react";

import "./header.css";

import List from "../videolist/videolist";

import { getSearchData } from "../api/api";

export default class header extends Component {
  state = {
    searchValue: "",
    serachSongData: [],
  };

  searchSong = async () => {
    const { searchValue } = this.state;

    const songData = [];

    if (searchValue) {
      var data = await getSearchData(searchValue);

      await data.map((ob) => {
        songData.push({
          id: ob.id,
          title: ob.title,
          imgUrl: ob.thumbnails.high.url,
        });
      });
    }

    await this.setState({ serachSongData: songData });
  };

  render() {
    return (
      <div>
        <div className="header-main p-2 text-light">
          <div className="flex-container">
            <div className="flex header-logo">Sangit</div>
            <div className="flex">
              <div className="input-group">
                <input
                  className="search-input form-control my-0 py-1 red-border "
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({ searchValue: e.target.value });
                    if (e.target.value === "") {
                      this.setState({ serachSongData: [] });
                    }
                  }}
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text red lighten-3"
                    id="basic-text1"
                    onClick={() => this.searchSong()}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="flex"></div>
          </div>
        </div>

        <List serachSongData={this.state.serachSongData} />
      </div>
    );
  }
}
