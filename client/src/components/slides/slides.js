import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slicker from "react-slick";

import "./slides.css";

export default class slides extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 7000,
      cssEase: "linear",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="container p-1">
        <div className="ml-2">
          <h4
            style={{
              borderBottom: "#7f67ea solid 5px ",
              display: "inline-block",
              padding: 3,
            }}
          >
            {this.props.title}
          </h4>
        </div>
        {this.props.data.length !== 0 ? (
          <Slicker {...settings}>
            {this.props.data.map((ob, i) => (
              <div key={i}>
                {/* <!-- Card --> */}
                <div className="card m-2 popular p-2">
                  {/* <!-- Card image --> */}
                  <div className="view overlay">
                    <img className="card-img-top" src={ob.imgurl} alt="img" />
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
                    onClick={() => this.props.fetchSongId(ob.id, ob.title)}
                  >
                    Play
                  </button>
                </div>
                {/* <!-- Card --> */}
              </div>
            ))}
          </Slicker>
        ) : (
          <div>
            <div className="d-flex justify-content-center">
              <div
                className="spinner-border"
                role="status"
                style={{ width: "2em", height: "2em" }}
              >
                <span className="sr-only">Loading...</span>
              </div>
              <span className="ml-2">Loading</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
