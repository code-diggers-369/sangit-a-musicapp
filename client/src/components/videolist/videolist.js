import React, { Component } from "react";
import axios from "axios";
import {
  getPopularList,
  getBollywoodLongSongs,
  getHollywoodSongs,
  getGhazalList,
} from "../api/api";

import Slide from "../slides/slides";

import ReactPlayer from "react-jinke-music-player";

import "react-jinke-music-player/assets/index.css";

export default class videolist extends Component {
  state = {
    popular: [],
    bollywood: [],
    hollywood: [],
    gazal: [],
    playerSongUrl: "",
    playerSongTitle: "",
    playsong: false,
    loading: false,
  };

  componentDidMount = async () => {
    try {
      await this.getPopularList();
      await this.getBollywoodBunchSongs();
      await this.getHollywoodSongs();
      await this.getGazals();
    } catch (e) {
      //window.location.reload();
      setTimeout(() => {
        window.location.reload();
        clearTimeout();
      }, 20000);
    }
  };

  getPopularList = async () => {
    var tredingList = await getPopularList();

    const data = [];

    await tredingList.map((ob) => {
      data.push({
        id: ob.id,
        title: ob.title,
        imgurl: ob.thumbnails.high.url,
      });
    });

    await this.setState({ popular: data });
  };

  getBollywoodBunchSongs = async () => {
    var list = await getBollywoodLongSongs();

    const data = [];

    await list.map((ob) => {
      data.push({
        id: ob.id,
        title: ob.title,
        imgurl: ob.thumbnails.high.url,
      });
    });

    await this.setState({ bollywood: data });
  };

  getHollywoodSongs = async () => {
    var list = await getHollywoodSongs();

    const data = [];

    await list.map((ob) => {
      data.push({
        id: ob.id,
        title: ob.title,
        imgurl: ob.thumbnails.high.url,
      });
    });

    await this.setState({ hollywood: data });
  };

  getGazals = async () => {
    var list = await getGhazalList();

    const data = [];

    await list.map((ob) => {
      data.push({
        id: ob.id,
        title: ob.title,
        imgurl: ob.thumbnails.high.url,
      });
    });

    await this.setState({ gazal: data });
  };

  getSongData = async (songId, title) => {
    try {
      await this.setState({
        playsong: false,
        playerSongTitle: "",
        playerSongUrl: "",
        loading: true,
      });

      var songUrl = await axios(`http://localhost:5000/download?URL=${songId}`);

      await this.setState({
        playerSongUrl: songUrl.data,
        playerSongTitle: title,
        playsong: true,
        loading: false,
      });
    } catch (e) {
      alert("Sorry Something Want Wrong Please Try Again");

      this.setState({ loading: false });
    }
  };

  customDownloader = () => {
    const link = document.createElement("a");
    link.href = this.state.playerSongUrl; // a.mp3
    link.download = "test";
    document.body.appendChild(link);
    link.click();
  };

  render() {
    return (
      <div>
        <div className="mt-3 mb-5">
          {this.props.serachSongData.length !== 0 ? (
            <div className="container">
              <h4
                style={{
                  borderBottom: "#7f67ea solid 5px ",
                  display: "inline-block",
                  padding: 3,
                }}
              >
                Search Result
              </h4>
              <div className="row ">
                {this.props.serachSongData.map((ob, i) => (
                  <div
                    key={i}
                    className="col-lg-4 col-xs-12 col-sm-6"
                    style={{ textAlign: "center" }}
                  >
                    {/* <!-- Card --> */}
                    <div className="card m-2 searchcard p-2">
                      {/* <!-- Card image --> */}
                      <div className="view overlay">
                        <img src={ob.imgUrl} className="card-img-top" />
                      </div>

                      {/* <!-- Card content --> */}
                      <div className="card-body">
                        {/* <!-- Title --> */}
                        <h6 className="card-title" style={{ fontWeight: 600 }}>
                          {ob.title}
                        </h6>
                        {/* <!-- Text --> */}
                      </div>

                      <button
                        className="btn "
                        style={{
                          width: "50%",
                          alignSelf: "center",
                          backgroundColor: "#3F51B5",
                          color: "#fff",
                        }}
                        onClick={() => this.getSongData(ob.id, ob.title)}
                      >
                        Play
                      </button>
                    </div>
                    {/* <!-- Card --> */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <Slide
            fetchSongId={this.getSongData}
            data={this.state.popular}
            title={"Popular Bollywood"}
          />

          <br></br>
          <br></br>
          <Slide
            fetchSongId={this.getSongData}
            data={this.state.bollywood}
            title={"Bollywood Albums"}
          />

          <br></br>
          <br></br>

          <Slide
            fetchSongId={this.getSongData}
            data={this.state.hollywood}
            title={"Hollywood Trend"}
          />

          <br></br>
          <br></br>

          <Slide
            fetchSongId={this.getSongData}
            data={this.state.gazal}
            title={"Hindi Gazals"}
          />

          {this.state.playsong === true ? (
            <ReactPlayer
              audioLists={[
                {
                  musicSrc: this.state.playerSongUrl,
                  name: this.state.playerSongTitle,
                  cover:
                    "https://cdn.pixabay.com/photo/2012/04/13/20/45/record-33583_960_720.png",
                  singer: "India",
                },
              ]}
              customDownloader={this.customDownloader}
              remove={true}
            />
          ) : (
            <div></div>
          )}
        </div>
        {this.state.loading === true ? (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
            }}
          >
            <div
              class="spinner-border"
              role="status"
              style={{ height: "2em", width: "2em" }}
            ></div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
