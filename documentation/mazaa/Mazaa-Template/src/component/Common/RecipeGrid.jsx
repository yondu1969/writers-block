import React, { Component } from "react";
import { Link } from "react-router-dom";
const GridImage1 = (
  <img src="assets/images/resources/recipe1.png" alt="recipe-list" />
);
const GridImage2 = (
  <img src="assets/images/resources/recipe2.png" alt="recipe-list" />
);
const GridImage3 = (
  <img src="assets/images/resources/recipe3.png" alt="recipe-list" />
);
const GridImage4 = (
  <img src="assets/images/resources/recipe4.png" alt="recipe-list" />
);
const GridImage5 = (
  <img src="assets/images/resources/recipe5.png" alt="recipe-list" />
);
const GridImage6 = (
  <img src="assets/images/resources/recipe6.png" alt="recipe-list" />
);
const GridList = [
  {
    image: GridImage1,
    title: "Stuffed Chicken Breast",
    AuthorName: "  By Gino D'Acampo",
    link: "recipe-detail",
  },
  {
    image: GridImage2,
    title: "Haak- Kashmiri Spinach",
    AuthorName: " By James",
    link: "recipe-detail",
  },
  {
    image: GridImage3,
    title: "Gundruk and Sinki Soup",
    AuthorName: " By Addison",
    link: "recipe-detail",
  },
  {
    image: GridImage4,
    title: "Cheese Black Forest",
    AuthorName: "By Adrian",
    link: "recipe-detail",
  },
  {
    image: GridImage5,
    title: "Chicken Reshmi Kabab",
    AuthorName: " By Barrett",
    link: "recipe-detail",
  },
  {
    image: GridImage6,
    title: "Dal Stuffed Paratha",
    AuthorName: " By Christopher",
    link: "recipe-detail",
  },
];
class RecipeGrid extends Component {
  render() {
    return (
      <section className="pt-80 pb-110">
        <div className="container">
          <div className="recipes-wrapper">
            <div className="row">
              {GridList.map((value, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="recipe-carousel-item">
                    <figure className="mb-4">{value.image}</figure>
                    <div className="recipe-info position-relative">
                      <h2 className="fs-26">
                        <Link to="/RecipeStyle1">{value.title}</Link>
                      </h2>
                      <span className="fs-16 text-theme text-uppercase">
                        {value.AuthorName}
                      </span>
                      <Link
                        className="fs-16 text-uppercase"
                        to="/RecipeStyle1"
                        title=""
                      >
                        Main Course<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <nav className="pt-60">
              <ul className="pagination d-flex justify-content-center mb-0">
                <li className="prev-page">
                  <a href="javascript:void(0)">
                    <i className="fa fa-angle-left"></i>Prev
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">1</a>
                </li>
                <li>
                  <a href="javascript:void(0)">2</a>
                </li>
                <li>
                  <a href="javascript:void(0)">3</a>
                </li>
                <li className="page-on">......</li>
                <li>
                  <a href="javascript:void(0)">28</a>
                </li>
                <li className="next-page">
                  <a href="javascript:void(0)">
                    Next<i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
export default RecipeGrid;
