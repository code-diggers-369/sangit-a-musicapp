import React, { Component } from "react";

import Header from "./components/header/header";

import Footer from "./components/footer/footer";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <Header />
        <Footer />
      </div>
    );
  }
}
