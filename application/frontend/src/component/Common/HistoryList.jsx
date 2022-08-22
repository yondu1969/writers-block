import React, { Component } from "react";
class HistoryList extends Component {
  render() {
    return (
      <div className="pb-110">
        <div className="container">
          <img
            className="img-fluid"
            src="assets/images/resources/history-4.jpg"
            alt=""
          />
          <div className="row">
            <div className="col-md-8 mx-auto">
              <ul className="history-lst mb-0 list-unstyled bg-gray">
                <li>
                  <span className="text-theme fs-26 font-weight-bold">1989</span>
                  <a
                    href="javascript:void(0)"
                    className="fs-20 font-weight-bold text-dark position-relative"
                  >
                    Daydreams Exquisite Cookies
                  </a>
                </li>
                <li>
                  <span className="text-theme fs-26 font-weight-bold">1988</span>
                  <a
                    href="javascript:void(0)"
                    className="fs-20 font-weight-bold text-dark position-relative"
                  >
                    Exquisite and fashionable cuisine
                  </a>
                </li>
                <li>
                  <span className="text-theme fs-26 font-weight-bold">1987</span>
                  <a
                    href="javascript:void(0)"
                    className="fs-20 font-weight-bold text-dark position-relative"
                  >
                    Development of new restaurants
                  </a>
                </li>
                <li>
                  <span className="text-theme fs-26 font-weight-bold">1986</span>
                  <a
                    href="javascript:void(0)"
                    className="fs-20 font-weight-bold text-dark position-relative"
                  >
                    Increased travel in the 19th century
                  </a>
                </li>
                <li>
                  <span className="text-theme fs-26 font-weight-bold">1985</span>
                  <a
                    href="javascript:void(0)"
                    className="fs-20 font-weight-bold text-dark position-relative"
                  >
                    Step Restaurant and Cantina
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HistoryList;
