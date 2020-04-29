import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <footer>
          <div
            className="p-3 text-light"
            style={{ textAlign: "center", backgroundColor: "#3F51B5" }}
          >
            <h5>This Site Is Developed By Haresh, Prashant And Mohit</h5>
            <h6>
              This Data Is Come From Youtube So Some Song Can Not Play Due To
              Broken Link Just Play Songs And Enjoy Your Day
            </h6>
          </div>
        </footer>
      </div>
    );
  }
}
