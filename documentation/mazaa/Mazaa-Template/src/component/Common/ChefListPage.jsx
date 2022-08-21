import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { Link } from "react-router-dom";
const ChefImage1 = (
  <img src="assets/images/resources/chef4.png" alt="chef List" />
);
const ChefImage2 = (
  <img src="assets/images/resources/chef5.png" alt="chef List" />
);
const ChefImage3 = (
  <img src="assets/images/resources/chef6.png" alt="chef List" />
);
const ChefImage4 = (
  <img src="assets/images/resources/chef7.png" alt="chef List" />
);
const ChefImage5 = (
  <img src="assets/images/resources/chef8.png" alt="chef List" />
);
const ChefImage6 = (
  <img src="assets/images/resources/chef9.png" alt="chef List" />
);
const ChefImage7 = (
  <img src="assets/images/resources/chef1.png" alt="chef List" />
);
const ChefImage8 = (
  <img src="assets/images/resources/chef2.png" alt="chef List" />
);
const ChefImage9 = (
  <img src="assets/images/resources/chef3.png" alt="chef List" />
);
const ChefList = [
  {
    image: ChefImage1,
    title: "Aaron Abel",
    subtitle: " 24 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage2,
    title: "Anthony Bud",
    subtitle: " 103 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage3,
    title: "Olivia Emma",
    subtitle: " 42 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage4,
    title: "Thomas Jackki",
    subtitle: " 89 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage5,
    title: "Isabel James",
    subtitle: " 201 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage6,
    title: "Sophia Ava",
    subtitle: " 07 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage7,
    title: "Abraham Calvin",
    subtitle: " 20 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage8,
    title: "Casper Cedric",
    subtitle: " 61 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
  {
    image: ChefImage9,
    title: "Jessica Williams",
    subtitle: " 24 Recips",
    icon: Arrow,
    link: "blog-detail.html",
  },
];
class ChefListPage extends Component {
  render() {
    return (
      <section>
        <div className="sec-space">
          <div
            className="bg-fixed"
            style={{
              backgroundImage: "url(" + "assets/images/mazaa-pattern.png" + ")",
            }}
          ></div>
          <div className="container">
            <div className="row">
              {ChefList.map((value, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="chef-box position-relative bg-white">
                    <div className="chef-box-content d-flex align-items-center">
                      <figure>{value.image}</figure>
                      <div className="chef-box-info">
                        <span className="text-theme fs-16">{value.subtitle}</span>
                        <h3 className="text-capitalize fs-26 mb-3">
                          {value.title}
                        </h3>
                        <Link
                          className="rounded-circle d-inline-block text-center"
                          to="/ChefDetail"
                          title=""
                        >
                          <Arrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChefListPage;
