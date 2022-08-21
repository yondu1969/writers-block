import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const SliderArea = [
  {
    link: "booking-table.html",
    bgImage: "slide-image-1.jpg",
    category: "100% Natural",
    title: "Choclate Chip Cream",
    description:
      "Many of the chips we tasted were bland and chalky, with a grainy crunch from too much sugar.",
    button: "Book a Table",
  },
  {
    link: "booking-table.html",
    bgImage: "slide-image2.jpg",
    category: "Do it yourself Plan",
    title: "The Fasting Mimicking",
    description:
      "Organic Minestrone, five pitted green olives button Text Start diet Today",
    button: "Book a Table",
  },
  {
    link: "booking-table.html",
    bgImage: "slide-image3.jpg",
    category: " The Perfect Choice",
    title: "Chicken and Mushroom",
    description: "Fresh, organic ingredients. Carefully prepared.",
    button: "Book a Table",
  },
];

var settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
};
class HomeOneSlider extends Component {
  render() {
    return (
      <Slider className="main-slider" {...settings}>
        {SliderArea.map((value, index) => (
          <div className="slider-item" key={index}>
            <div
              className="bg-fixed"
              style={{
                backgroundImage:
                  "url(" + "assets/images/" + value.bgImage + ")",
              }}
            ></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="slider-txt">
                    <span className="text-theme font-weight-semibold fs-20 mb-3 d-block text-capitalize">
                      {value.category}
                    </span>
                    <h2 className="mb-2">{value.title}</h2>
                    <p>{value.description}</p>
                    <Link className="theme-btn-secondary mt-35" to="/BookingTable">
                      {value.button}
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
export default HomeOneSlider;
