import React, { Component } from "react";
class HistoryBlock extends Component {
  render() {
    return (
      <section className="py-110">
        <div className="container">
          <div className="history-item">
            <div className="row align-items-center">
              <div className="col-md-7">
                <figure className="position-relative mb-0">
                  <img
                    className="img-fluid"
                    src="assets/images/resources/history-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-5">
                <div className="history-txt">
                  <span className="theme-color font-weight-bold">2010</span>
                  <h3 className="fs-30 mb-2">Daydreams Exquisite Cookies</h3>
                  <p className="mb-0 fs-18">
                    Lorem ipsum dolor sit amet, consectetur adipi adipi ing
                    elit. Eaoptio nulla illum, eius d maioresulla illum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="history-item pt-60">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="history-txt">
                  <span className="theme-color text-theme font-weight-bold">
                    1995
                  </span>
                  <h3 className="fs-30 mb-20">Restaurant City Center Houston</h3>
                  <p className="mb-0 fs-18">
                    Lorem ipsum dolor sit amet, consectetur adipi adipi ing
                    elit. Eaoptio nulla illum, eius d maioresulla illum.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <figure className="position-relative mb-0">
                  <img
                    className="img-fluid"
                    src="assets/images/resources/history-2.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="history-item pt-60">
            <div className="row align-items-center">
              <div className="col-md-7">
                <figure className="position-relative mb-0">
                  <img
                    className="img-fluid"
                    src="assets/images/resources/history-3.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-md-5">
                <div className="history-txt">
                  <span className="theme-color text-theme font-weight-bold">
                    1990
                  </span>
                  <h3 className="fs-30 mb-20">
                    Scatter it throughout your Branding
                  </h3>
                  <p className="mb-0 fs-18">
                    Lorem ipsum dolor sit amet, consectetur adipi adipi ing
                    elit. Eaoptio nulla illum, eius d maioresulla illum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HistoryBlock;
