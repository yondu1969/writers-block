import React, { Component } from "react";
import { ReactComponent as Chef } from "../../svg/chef.svg";
import { ReactComponent as Flag } from "../../svg/flag.svg";
import { ReactComponent as Phone } from "../../svg/phone-call.svg";
import { ReactComponent as Mail } from "../../svg/mail.svg";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import WOW from "wowjs";

class ChefDetailOne extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <section className="py-110">
        <div className="container">
          <div className="chef-personal-info bg-gray position-relative">
            <div
              className="chef-bg wow slideInLeft"
              data-wow-delay="0.5s"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/chef-pattern.jpg" + ")",
              }}
            ></div>
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="chef-avatar">
                  <img src="assets/images/resources/main-chef.png" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="chef-title d-flex align-items-start justify-content-between">
                  <div>
                    <span className="text-theme font-weight-bold fm-arimo fs-16">
                      24 Recips
                    </span>
                    <h3 className="fs-30">James Smith</h3>
                  </div>
                  <Link to="/RecipeStyle1" className="theme-btn-secondary">
                    View Recipe<span></span>
                  </Link>
                </div>
                <div className="chef-meta mt-30">
                  <ul className="list-unstyled p-0 mb-0">
                    <li>
                      <Chef />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Experience:
                      </strong>
                      <span className="fm-arimo text-gray">12 Years </span>
                    </li>
                    <li>
                      <Flag />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Nationality:
                      </strong>
                      <span className="fm-arimo text-gray">New Zealand </span>
                    </li>
                    <li>
                      <Phone />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Phone:{" "}
                      </strong>
                      <span className="fm-arimo text-gray">
                        (973) 344 78410{" "}
                      </span>
                    </li>
                    <li>
                      <Mail />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Email:{" "}
                      </strong>
                      <span className="fm-arimo text-gray">
                        username@domain.com{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <ul className="chef-social list-unstyled p-0 mb-0 mt-30">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#365dce" }}
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#e62d31" }}
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#36c8e3" }}
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#0f9cd6" }}
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chef-desc pt-60">
            <p>
              Lorem ipsum dolor sit amet, consectetur a dipisicing elit. Ea
              ratione optio nulla illum, eius do lor maiores nulla illum, sit
              amet, consectetur a dipis icing eit amet, conse ulla illum, eius
              do lor maiores nulla illum, Lorem ipsum dolor sit a m et,
              consectetur a dip onsectetur a dipis icing elit. Eaisicing elit.
              Ea ratione o ptio nulla illum, eius lla illum, Loremo lor sit
              amet, consectetur a dipis icing eit amet, conse ulla illum, eius
              do lor maiores nulla illum, Lorem ipsum dolor s it am et,
              consectetur a dip onsectetur a dipis icing elit. Eaisicing nulla
              illum, eius lla illum, Lorem ipsum dolor sit.
            </p>

            <p>
              Ea ratione o ptio nulla illum, eius lla illum, Loremo lor sit
              amet, consectetur a dipis icing eit amet, conse ulla illum, eius
              do lor ilmr a dipis icing elit. Eaisicing nulla illum, eius lla
              illum, Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="chef-gal pt-60">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry columnsCount={3}>
                <div>
                  <a href="assets/images/resources/chef-gal1.jpg" data-fancybox>
                    <img src="assets/images/resources/chef-gal1.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <a href="assets/images/resources/chef-gal3.jpg" data-fancybox>
                    <img src="assets/images/resources/chef-gal2.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <a href="assets/images/resources/chef-gal3.jpg" data-fancybox>
                    <img src="assets/images/resources/chef-gal3.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <a href="assets/images/resources/chef-gal4.jpg" data-fancybox>
                    <img src="assets/images/resources/chef-gal4.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <div className="img-positiong">
                    <a
                      href="assets/images/resources/chef-gal5.jpg"
                      data-fancybox
                    >
                      <img src="assets/images/resources/chef-gal5.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <a href="assets/images/resources/chef-gal6.jpg" data-fancybox>
                    <img src="assets/images/resources/chef-gal6.jpg" alt="" />
                  </a>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </section>
    );
  }
}
export default ChefDetailOne;
