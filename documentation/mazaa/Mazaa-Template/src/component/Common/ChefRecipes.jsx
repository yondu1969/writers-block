import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
class ChefRecipes extends Component {
  render() {
    return (
      <section>
        <div className="sec-space">
          <div
            className="bg-fixed"
            style={{
              backgroundImage:
                "url(" + "assets/images/resources/parallax.jpg" + ")",
            }}
          ></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-heading text-center">
                  <span className="text-theme fs-20 d-block mb-2 theme-color">
                    Expert and Professional
                  </span>
                  <h2 className="text-uppercase fs-45 mb-40">Top Chef’s Recips</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="chef-box position-relative bg-white">
                    <div className="chef-box-content d-flex align-items-center">
                      <figure>
                        <img src="assets/images/resources/chef1.png" alt="" />
                      </figure>
                      <div className="chef-box-info">
                        <span className="text-theme fs-16">24 Recips</span>
                        <h3 className="text-capitalize fs-26 mb-3">
                          Thomas Jackki
                        </h3>
                        <a
                          className="rounded-circle d-inline-block text-center"
                          href="chef-detail.html"
                          title=""
                        >
                          <Arrow />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="chef-box position-relative bg-white">
                    <div className="chef-box-content d-flex align-items-center">
                      <figure>
                        <img src="assets/images/resources/chef2.png" alt="" />
                      </figure>
                      <div className="chef-box-info">
                        <span className="text-theme fs-16">24 Recips</span>
                        <h3 className="text-capitalize fs-26 mb-3">Rolkar James</h3>
                        <a
                          className="rounded-circle d-inline-block text-center"
                          href="chef-detail.html"
                          title=""
                        >
                          <Arrow />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="chef-box position-relative bg-white">
                    <div className="chef-box-content d-flex align-items-center">
                      <figure>
                        <img src="assets/images/resources/chef3.png" alt="" />
                      </figure>
                      <div className="chef-box-info">
                        <span className="text-theme fs-16">24 Recips</span>
                        <h3 className="text-capitalize fs-26 mb-3">
                          Willimes Nomin
                        </h3>
                        <a
                          className="rounded-circle d-inline-block text-center"
                          href="chef-detail.html"
                          title=""
                        >
                          <Arrow />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chef-contct-info justify-content-center d-flex align-items-center pt-60 mb-20">
                <i className="flaticon-phone"></i>
                <span className="fs-20">Waiting Your Call: ( 378 ) 400-1234 </span>
              </div>
              <ul className="social-icons d-flex align-items-center justify-content-center m-0 p-0 list-unstyled">
                <li>
                  <a
                    className="rounded-circle d-inline-block fs-16 text-center text-black"
                    href="javascript:void(0)"
                    title=""
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-circle d-inline-block fs-16 text-center text-black"
                    href="javascript:void(0)"
                    title=""
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-circle d-inline-block fs-16 text-center text-black"
                    href="javascript:void(0)"
                    title=""
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-circle d-inline-block fs-16 text-center text-black"
                    href="javascript:void(0)"
                    title=""
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChefRecipes;
