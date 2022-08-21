import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import { FcRight } from "react-icons/fc";
import WOW from "wowjs";
import { version } from "react";

class BookingTable extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Booking Table" />
        <section>
          <div className="sec-space">
            <div
              className="parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/member-bg.jpg" + ")",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div
                    className="book-table becom-membr wow bounce "
                    data-wow-delay="0.5s"
                    style={{
                      backgroundImage:
                        "url(" +
                        "assets/images/resources/background-circle.jpg" +
                        ")",
                    }}
                  >
                    <div className="membr-contnt text-center">
                      <h2 className="h2 font-weight-bold fs-50 mb-0">
                        Book A Table
                      </h2>
                      <form className="bcom-membr">
                        <select className="minimal mb-3">
                          <option>Booking Type</option>
                          <option>Lunch</option>
                          <option>Midnight Dinner </option>
                          <option>Early Evening </option>
                        </select>
                        <select className="minimal mb-3">
                          <option>Number of people</option>
                          <option>Three to Five person</option>
                          <option>Two person</option>
                        </select>

                        <div className="d-lg-flex">
                          <input className="mb-3 mr-3" type="date" />
                          <input className="mb-3" type="time" />
                        </div>
                      </form>
                      <div className="mt-3">
                        <button type="submit" className="theme-btn-secondary">
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default BookingTable;
