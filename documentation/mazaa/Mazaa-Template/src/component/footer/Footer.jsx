import React, { Component } from "react";
import { ReactComponent as Clock } from "../../svg/wall-clock2.svg";
import { ReactComponent as Placeholder } from "../../svg/placeholder.svg";
import { Link } from "react-router-dom";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];
class Footer extends Component {
  render() {
    return (
      <footer className="sec-space overlay position-relative">
        <div
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "assets/images/mazaa-pattern.png"
            })`,
            backgroundRepeat: "no-repeat",
            width: "250px",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget abt-us-widget">
                <h4 className="widget-title text-white h4 font-weight-bold">
                  About Us
                </h4>
                <p className="fs-18 text-gray2 mb-0">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor cididunt Lorem ipsum dolor sit amet, nempor in
                  cididunt.
                </p>
                <div className="folow-us flex-row">
                  <div className="social-share-inner">
                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget quick-lnks-widget">
                <h4 className="widget-title text-white h4 font-weight-bold">
                  The Menu
                </h4>
                <ul className=" list-unstyled">
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Speacial Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Fresh Breakfast
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Lunch Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Dinner Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      We Offerd Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Dessert
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Super Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Fresh Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fs-16 position-relative"
                      to="/RecipeGridView"
                      title=""
                    >
                      Special
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget contct-widget">
                <h4 className="widget-title text-white h4 font-weight-bold">
                  Get in Touch
                </h4>
                <div className="conct-info-blk d-flex flex-row">
                  <Clock />
                  <div>
                    <span className=" d-block text-gray2 fs-18">
                      Monday- Friday
                      <strong className="font-weight-bold text-white d-block">
                        08am - 12pm
                      </strong>
                    </span>
                    <span className=" d-block text-gray2 fs-18">
                      Saturday - Sunday:
                      <strong className="font-weight-bold text-white d-block">
                        10am - 11pm{" "}
                      </strong>
                    </span>
                  </div>
                </div>
                <div className="conct-info-blk d-flex flex-row">
                  <Placeholder />
                  <p className="text-gray2 fs-18">
                    8121 Sierra Lane Tampa, Florida 33604
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-btm text-center">
            <div className="row">
              <div className="col-md-12">
                <ul className="footer-menu  list-unstyled d-flex justify-content-between">
                  <li>
                    <Link className="fs-16 font-weight-bold" to="/" title="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      className="fs-16 font-weight-bold"
                      href="javascript:void(0)"
                      title=""
                    >
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a
                      className="fs-16 font-weight-bold"
                      href="javascript:void(0)"
                      title=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <Link
                      className="fs-16 font-weight-bold"
                      to="/Contact"
                      title=""
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <p className="copy-rigts fs-16 text-gray2">
                  Copyright{" "}
                  <span className="text-white font-weight-semibold">
                    2021 Mazaa
                  </span>
                  . Designed by{" "}
                  <a className="text-theme" href="javascript:void(0)" title="">
                    Webinane.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
