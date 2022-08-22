import React, { Component } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
class SingleRecipe extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div className="sec-space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="sing-recipe-img wow fadeInLeft "
                data-wow-delay="0.5s"
              >
                <img
                  className="img-fluid"
                  src="assets/images/resources/sin-recpie-img.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sing-recipe-content">
                <div className="single-rec-desc">
                  <h2 className="mb-3">Chicken Kebabs with Roasted Red Onions.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    ratione optio nulla illum, eius dolor maiores Lorem ipsum
                    dolor sit amEa ratione optio nullaius dolor maiores et,
                    cnulla illum, eius dolor maiores Lorem ipsumonsectetur
                    adipisicing elit.{" "}
                  </p>
                  <Link
                    className="theme-btn-secondary mt-4"
                    to="/RecipeStyle1"
                    title=""
                  >
                    learn more<span></span>
                  </Link>
                </div>
                <ul className="sing-smal-info mb-0 wow fadeInRight" data-wow-delay="0.5s">
                  <li className="position-relative fs-18">By Master Chif</li>
                  <li className="position-relative fs-18">20 Minutes</li>
                  <li className="position-relative fs-18">Natural Food</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleRecipe;
