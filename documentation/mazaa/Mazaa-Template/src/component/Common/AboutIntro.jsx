import React, { Component } from "react";
import { ReactComponent as Bathroom } from "../../svg/toilet-paper.svg";
import { ReactComponent as Parking } from "../../svg/parking.svg";
import { ReactComponent as Stairs } from "../../svg/mechanic-stairs.svg";
import { ReactComponent as Wifi } from "../../svg/wifi.svg";
import Tilt from "react-tilt";
class AboutIntro extends Component {
  render() {
    return (
      <section>
        <div className="sec-space no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="abt-resturant">
                  <span className="text-theme theme-color fs-20 d-block mb-2">
                    Start Restaurant in 1985.
                  </span>
                  <h2 className="h1 mb-3 font-weight-bold">
                    Welcome to the Mazaa Club.
                  </h2>
                  <p className="pr-5 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipi adipi ing
                    elit. Ea ratione optio nulla illum, eusd maioresulla illum,
                  </p>
                  <span className="font-weight-semibold mb-3 fs-20 d-block">
                    Available facilities
                  </span>
                  <ul className="list-unstyled p-0 m-0">
                    <li className="fs-18 text-gray">
                      <Bathroom />
                      Disabled Toilets
                    </li>
                    <li className="fs-18 text-gray">
                      <Parking />
                      Free Parking
                    </li>
                    <li className="fs-18 text-gray">
                      <Stairs />
                      Step Free Access
                    </li>
                    <li className="fs-18 text-gray">
                      <Wifi />
                      Baby Changing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="abt-imgs d-flex align-items-center">
                  <div className="align-self-center">
                    <Tilt className="mb-0 tilt" options={{ max: 40, scale: 1 }}>
                      <img
                        className="Tilt-inner"
                        src="assets/images/resources/abt-img1.jpg"
                        alt=""
                      />
                    </Tilt>
                  </div>
                  <div className="align-self-start">
                    <figure>
                      <Tilt
                        className="mb-0  Tilt"
                        options={{ max: 40, scale: 1 }}
                      >
                        <img
                          className="Tilt-inner"
                          src="assets/images/resources/abt-img2.jpg"
                          alt=""
                        />
                      </Tilt>
                    </figure>
                    <figure>
                      <Tilt
                        className="mb-0 Tilt"
                        options={{ max: 40, scale: 1 }}
                      >
                        <img
                          className="Tilt-inner"
                          src="assets/images/resources/abt-img3.jpg"
                          alt=""
                        />
                      </Tilt>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AboutIntro;
