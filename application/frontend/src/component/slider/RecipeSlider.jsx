import React, { Component } from "react";
import Slider from "react-slick";
const Sliderimg1 = (
  <img src="assets/images/resources/recipe6.png" alt="Sliderimg" />
);
const Sliderimg2 = (
  <img src="assets/images/resources/today-recipe2.jpg" alt="Sliderimg" />
);
const Sliderimg3 = (
  <img src="assets/images/resources/today-recipe3.jpg" alt="Sliderimg" />
);
const Sliderimg4 = (
  <img src="assets/images/resources/today-recipe1.jpg" alt="Sliderimg" />
);

const SliderContent = [
  {
    image: Sliderimg1,
    link: "recipe-detail.html",
    AuthorName: "By Gino D'Acampo",
    title: "Sesame Honey Roasted",
  },
  {
    image: Sliderimg2,
    link: "recipe-detail.html",
    AuthorName: "By Addison",
    title: "Chicken Reshmi Kabab",
  },
  {
    image: Sliderimg3,
    link: "recipe-detail.html",
    AuthorName: "By Gino D'Acampo",
    title: "Sesame Honey Roasted",
  },
  {
    image: Sliderimg4,
    link: "recipe-detail.html",
    AuthorName: "By Charles",
    title: "Haak- Kashmiri Spinach",
  },
  {
    image: Sliderimg1,
    link: "recipe-detail.html",
    AuthorName: "By Gino D'Acampo",
    title: "Sesame Honey Roasted",
  },
  {
    image: Sliderimg2,
    link: "recipe-detail.html",
    AuthorName: "By Addison",
    title: "Chicken Reshmi Kabab",
  },
  {
    image: Sliderimg3,
    link: "recipe-detail.html",
    AuthorName: "By Gino D'Acampo",
    title: "Sesame Honey Roasted",
  },
  {
    image: Sliderimg4,
    link: "recipe-detail.html",
    AuthorName: "By Charles",
    title: "Haak- Kashmiri Spinach",
  },
];

class RecipeSlider extends Component {
  constructor(props) {
    super(props);
    this.slidesToShow = 3;
  }
  componentDidMount() {
    let index = 0;
    let elements = document.querySelectorAll(".recipe-carousel .slick-slide");
    if (elements.length) {
      elements.forEach((element) => {
        element.classList.remove("next-slick-item");
      });
      document
        .querySelectorAll(".recipe-carousel .slick-slide")
        [index + this.slidesToShow].nextSibling.classList.add(
          "next-slick-item"
        );
    }
  }
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.slidesToShow,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: (index) => {
        let elements = document.querySelectorAll(
          ".recipe-carousel .slick-slide"
        );
        if (elements.length) {
          elements.forEach((element) => {
            element.classList.remove("next-slick-item");
          });
          document
            .querySelectorAll(".recipe-carousel .slick-slide")
            [index + this.slidesToShow].nextSibling.classList.add(
              "next-slick-item"
            );
        }
      },
    };
    return (
      <Slider className="recipe-carousel" {...settings}>
        {SliderContent.map((value, index) => (
          <div className="recipe-carousel-item" key={index}>
            <div className="testy">
              <figure className="mb-4">{value.image}</figure>
              <div className="recipe-info position-relative">
                <h2 className="fs-22">
                  <a href="recipe-detail.html">{value.title}</a>
                </h2>
                <span className="fs-14 text-theme text-uppercase">
                  {value.AuthorName}
                </span>
                <a
                  className="fs-14 font-weight-bold text-uppercase"
                  href="recipe-detail.html"
                  title=""
                >
                  Main Course<i className="fa fa-angle-right"></i>
                </a>
              </div>
              <ul className="recipe-cokng-info p-0 list-unstyled">
                <li className="fs-16 text-gray">
                  Preparation time: <strong>30 mins</strong>
                </li>
                <li className="fs-16 text-gray">
                  Cooking time: <strong>10 to 30 mins</strong>
                </li>
                <li className="fs-16 text-gray">
                  Serves: <strong>4 Persons</strong>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
export default RecipeSlider;
