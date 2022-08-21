import React, { Component } from "react";
import { ReactComponent as Kabab } from "../../svg/kebab.svg";
import { ReactComponent as Cabbage } from "../../svg/cabbage.svg";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { ReactComponent as Cheese } from "../../svg/cheese.svg";
import { ReactComponent as Bonbon } from "../../svg/bonbon.svg";
import { Link } from "react-router-dom";

const ServiceCatIcon1 = <Kabab />;
const ServiceCatIcon2 = <Bonbon />;
const ServiceCatIcon3 = <Cabbage />;
const ServiceCatIcon4 = <Cheese />;

const ServiceCat = [
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "Meats",
    icon: ServiceCatIcon1,
  },
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "Bakery",
    icon: ServiceCatIcon2,
  },
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "Vegetables",
    icon: ServiceCatIcon3,
  },
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "Cheese",
    icon: ServiceCatIcon4,
  },
];

class Service extends Component {
  render() {
    return (
      <div className="sec-space no-bottom">
        <div className="container">
          <div className="row">
            {ServiceCat.map((value, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="food-cat-box text-center position-relative">
                  <div
                    className="cat-hover position-absolute"
                    style={{
                      backgroundImage:
                        "url(" +
                        "assets/images/resources/" +
                        value.bgImage +
                        ")",
                    }}
                  ></div>
                  <div className="food-cat-inner">
                    {value.icon}
                    <h4 className="text-capitalize fs-26 mb-0 mt-1">
                      <a href="{value.link}" title="">
                        {value.category}
                      </a>
                    </h4>
                  </div>
                  <Link
                    to="/RecipeListView"
                    className="go-detail d-inline-block rounded-circle"
                  >
                    <Arrow />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
