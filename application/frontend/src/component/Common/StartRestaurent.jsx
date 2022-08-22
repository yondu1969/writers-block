import React, { Component } from "react";
class StartRestaurent extends Component {
  render() {
    return (
      <section className="py-110">
        <div className="container">
          <div className="sec-heading text-center">
            <span className="text-theme fs-20 d-block mb-2 theme-color">
              Start Restaurant in 1985.
            </span>
            <h2 className="fs-45 mb-40">
              Try Our Dishes and You Will Never Want Something Else
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="history-detail">
                <img
                  className="img-fluid"
                  src="assets/images/resources/history-main-1.jpg"
                  alt=""
                />
                <p className="mb-0 fs-18">
                  Lorem ipsum dolor sit amet, consectetur adipi adipi ing elit.
                  Eaoptio nulla illum, eius d maioresulla illum, Lorem ipsum
                  dolor s consectetur adipiadipi ing elit Lorem ipsum dolor sit
                  amet, consectetur adipi adipi ing elit. Eaoptio nulla illum,
                  eius d maioresl consectetur adipiadipi ing elit.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history-detail">
                <img
                  className="img-fluid"
                  src="assets/images/resources/history-main-2.jpg"
                  alt=""
                />
                <p className="mb-0 fs-18">
                  Lorem ipsum dolor sit amet, consectetur adipi adipi ing elit.
                  Eaoptio nulla illum, eius d maioresulla illum, Lorem ipsum
                  dolor s consectetur adipiadipi ing elit Lorem ipsum dolor sit
                  amet, consectetur adipi adipi ing elit. Eaoptio nulla illum,
                  eius d maioresl consectetur adipiadipi ing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default StartRestaurent;
