import React, { Component } from "react";
import { ReactComponent as ClockTwo } from "../../svg/Clock-Two.svg";

const videoimage = (
  <img src="assets/images/resources/vid-img-lst1.jpg" alt="chef List" />
);
const videoimage1 = (
  <img src="assets/images/resources/vid-img-lst2.jpg" alt="chef List" />
);
const videoimage2 = (
  <img src="assets/images/resources/vid-img-lst3.jpg" alt="chef List" />
);

const Cheflist = [
  {
    image: videoimage,
    title: "Magic Melting Mocha Cake",
    time: "1:21 Mins",
    link: "https://www.youtube.com/watch?v=XBJKi2tcKkE",
    by: "By",
    name: "Gino D'Acampo",
  },
  {
    image: videoimage1,
    title: "Magic Melting Mocha Cake",
    time: "1:21 Mins",
    link: "https://www.youtube.com/watch?v=XBJKi2tcKkE",
    by: "By",
    name: "Gino D'Acampo",
  },
  {
    image: videoimage2,
    title: "Magic Melting Mocha Cake",
    time: "1:21 Mins",
    link: "https://www.youtube.com/watch?v=XBJKi2tcKkE",
    by: "By",
    name: "Gino D'Acampo",
  },
];

class ChefPost extends Component {
  render() {
    return (
      <section>
        <div className="sec-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-heading text-center">
                  <span className="text-theme fs-20 d-block mb-2 theme-color">
                    Watch Recipe Videos
                  </span>
                  <h2 className="text-uppercase fs-45 mb-40">Video Network</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="reci-feature-vido">
                  <figure className="mb-0 position-relative">
                    <img
                      className="img-fluid"
                      src="assets/images/resources/f-vid.jpg"
                      alt=""
                    />
                    <a
                      className="popup-vid text-center rounded-circle text-white"
                      data-fancybox="iframe"
                      href="https://www.youtube.com/watch?v=XBJKi2tcKkE"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                    <div className="text-center">
                      <h3 className="text-white fs-30 mb-0">
                        10 delicious homemade party food recipes
                      </h3>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="recipies-vid-list">
                  {Cheflist.map((value, index) => (
                    <div
                      className="recipe-vid-box d-flex align-items-center"
                      key={index}
                    >
                      <figure className="mb-0 position-relative">
                        {value.image}
                        <a
                          className="popup-vid smal-siz text-center rounded-circle text-white"
                          data-fancybox="iframe"
                          href="{value.link}"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </figure>

                      <div className="recipe-vid-txt">
                        <span className="vid-duration fs-18">
                          <ClockTwo />
                          {value.time}
                        </span>
                        <h4 className="text-capitalize fs-24">{value.title}</h4>
                        <span className="text-them">
                          {value.by}
                          <strong className="theme-color">{value.name}</strong>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChefPost;
