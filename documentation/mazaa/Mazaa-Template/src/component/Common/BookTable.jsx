import React, { Component } from "react";
import { Link } from "react-router-dom";
class BookTable extends Component {
  render() {
    return (
      <div className="sec-space no-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="book-tble-content pr-lg-5">
                <h2 className="h1 mb-3 font-weight-bold">
                  We Invite You To The Restaurant.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  ratione optio nulla illum, eius dolor maiores nulla illum,{" "}
                </p>
                <div className="resturant-timng d-flex align-items-center mt-2 mb-20">
                  <span>
                    <i className="flaticon-clock"></i>
                  </span>
                  <ul className="m-0 p-0 list-unstyled">
                    <li className="fs-16 pl-3">
                      Monday- Friday:{" "}
                      <strong className="text-theme">08am - 12pm</strong>
                    </li>
                    <li className="fs-16 pl-3">
                      Saturday - Sunday:{" "}
                      <strong className="text-theme">10am - 11pm</strong>
                    </li>
                  </ul>
                </div>
                <Link className="theme-btn-secondary" to="/BookingTable" title="">
                  book a table<span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="vid-area">
                <figure className="mb-0 position-relative">
                  <img
                    className="img-fluid"
                    src="assets/images/resources/vid-img.jpg"
                    alt=""
                  />
                  <a
                    className="popup-vid text-center rounded-circle text-white"
                    data-fancybox="iframe"
                    href="https://www.youtube.com/watch?v=XBJKi2tcKkE"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookTable;
