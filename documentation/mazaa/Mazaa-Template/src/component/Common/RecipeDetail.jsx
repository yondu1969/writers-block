import React, { Component } from "react";
import { ReactComponent as Restaurant } from "../../svg/restaurant.svg";
import { ReactComponent as Clock } from "../../svg/wall-clock.svg";
import { ReactComponent as Reload } from "../../svg/reload.svg";
import { ReactComponent as Chef } from "../../svg/chef2.svg";
import WOW from "wowjs";
class RecipeDetail extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <section className="pt-110 pb-60">
        <div className="container">
          <div className="recipe-detail-box position-relative">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div
                  className="recipe-detail-img wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/resources/recipe-detail.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="recipe-quick-info">
                  <h3 className="fs-45 mb-2">Sushi Dizzy</h3>
                  <div className="recipe-quick-meta">
                    <span>
                      Published on{" "}
                      <strong className="theme-color">February 25, 2015</strong>{" "}
                    </span>
                    <span>in Japanese </span>
                  </div>
                  <div className="recipe-prep-box bg-theme d-sm-flex justify-content-between flex-wrap position-relative">
                    <div className="prep-icon-box d-flex align-items-center">
                      <Reload />
                      <div className="pl-2">
                        <span className="d-block fs-16">Prep Time</span>
                        <strong className="text-white fs-20">10 Minutes</strong>
                      </div>
                    </div>
                    <div className="prep-icon-box d-flex align-items-center">
                      <Clock />
                      <div className="pl-2">
                        <span className="d-block fs-14 fs-16">Cook Time</span>
                        <strong className="text-white fs-20">20 Minutes</strong>
                      </div>
                    </div>
                    <div className="prep-icon-box d-flex align-items-center">
                      <Chef />
                      <div className="pl-2">
                        <span className="d-block fs-16">Yield </span>
                        <strong className="text-white fs-20">2</strong>
                      </div>
                    </div>
                    <div className="prep-icon-box d-flex align-items-center">
                      <Restaurant />
                      <div className="pl-2">
                        <span className="d-block fs-16">Difficulty Level</span>
                        <strong className="text-white fs-20">Easy</strong>
                      </div>
                    </div>
                  </div>
                  <div className="recipe-stars d-md-flex align-items-center mt-3">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="ml-3">(4.2 /5) 76 ratings </span>
                  </div>
                  <ul className="contact-social list-unstyled d-flex mt-30 mb-0">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#365dce" }}
                      >
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#e62d31" }}
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#36c8e3" }}
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#0f9cd6" }}
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default RecipeDetail;
