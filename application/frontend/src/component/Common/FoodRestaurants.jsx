import React, { Component } from "react";
import BranchSlider from "../slider/BranchSlider";

const Restaurantimg1 = (
  <img src="assets/images/resources/branch-logo1.png" alt="chef List" />
);
const restaurantimg2 = (
  <img src="assets/images/resources/branch-logo2.png" alt="chef List" />
);
const restaurantimg3 = (
  <img src="assets/images/resources/branch-logo3.png" alt="chef List" />
);
const restaurantimg4 = (
  <img src="assets/images/resources/branch-logo4.png" alt="chef List" />
);

const RestaurentArea = [
  {
    image: Restaurantimg1,
    link: "recipe-list-view.html",
    bgImage: "branch1.jpg",
    bgImage2: "branch1.jpg",
    category: "Meats",
    title: "1770 House",
    description: " 6100 Westheimer Rd, Houston United State",
  },
  {
    image: restaurantimg2,
    link: "recipe-list-view.html",
    bgImage: "branch2.jpg",
    bgImage2: "branch2.jpg",
    category: "Meats",
    title: "1770 House",
    description: " 6100 Westheimer Rd, Houston United State",
  },
  {
    image: restaurantimg3,
    link: "recipe-list-view.html",
    bgImage: "branch3.jpg",
    bgImage2: "branch3.jpg",
    category: "Meats",
    title: "1770 House",
    description: " 6100 Westheimer Rd, Houston United State",
  },
  {
    image: restaurantimg4,
    link: "recipe-list-view.html",
    bgImage: "branch4.jpg",
    bgImage2: "branch4.jpg",
    category: "Meats",
    title: "1770 House",
    description: " 6100 Westheimer Rd, Houston United State",
  },
];
class FoodRestaurants extends Component {
  render() {
    return (
      <section>
        <div className="sec-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-heading text-center">
                  <span className="text-theme fs-20 d-block mb-2 theme-color">
                    Highlights Branches
                  </span>
                  <h2 className="text-uppercase fs-45 mb-40">Food restaurants</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="branchs-caro">
                  <BranchSlider />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="branchs-boxes">
                  <div className="row">
                    {RestaurentArea.map((value, index) => (
                      <div className="col-lg-6" key={index}>
                        <div className="branch-item">
                          <div
                            className="branch-frnt-view text-center d-flex align-items-center justify-content-center"
                            style={{
                              backgroundImage:
                                "url(" +
                                "assets/images/resources/" +
                                value.bgImage +
                                ")",
                            }}
                          >
                            <div className="branch-meta">{value.image}</div>
                          </div>
                          <div
                            className="branch-flip-view text-center d-flex align-items-center justify-content-center"
                            style={{
                              backgroundImage:
                                "url(" +
                                "assets/images/resources/" +
                                value.bgImage2 +
                                ")",
                            }}
                          >
                            {" "}
                            <div className="branch-flip-meta">
                              <h4 className="h4 font-weight-bold text-white">
                                {value.title}
                                <p className="text-white fs-18">
                                  {value.description}
                                </p>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
export default FoodRestaurants;
