import React, { Component, useDebugValue } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { Link } from "react-router-dom";
const recipeImage1 = (
  <img src="assets/images/resources/recipe-list1.png" alt="recipe-list" />
);
const recipeImage2 = (
  <img src="assets/images/resources/recipe-list2.png" alt="recipe-list" />
);
const recipeImage3 = (
  <img src="assets/images/resources/recipe-list3.png" alt="recipe-list" />
);
const recipeImage4 = (
  <img src="assets/images/resources/recipe-list4.png" alt="recipe-list" />
);
const recipeImage5 = (
  <img src="assets/images/resources/recipe-list5.png" alt="recipe-list" />
);
const recipeImage6 = (
  <img src="assets/images/resources/recipe-list6.png" alt="recipe-list" />
);
const CookingTime = (
  <ul className="recipe-cokng-meta p-0 list-unstyled mb-0 mt-2">
    <li className="fs-16 fm-arimo text-gray position-relative">
      Preparation time: <strong>30 mins</strong>
    </li>
    <li className="fs-16 fm-arimo text-gray position-relative">
      Cooking time: <strong>10 to 30 mins</strong>
    </li>
    <li className="fs-16 fm-arimo text-gray position-relative">
      Serves: <strong>4 Persons</strong>
    </li>
  </ul>
);
const RecipyList = [
  {
    image: recipeImage1,
    title: "Stuffed Chicken Breast",
    AuthorName: "  by Gino D'Acampo",
    icon: Arrow,
    CookingTime: CookingTime,
    link: "chef-detail.html",
    Rating: "(4.2 /5)",
  },
  {
    image: recipeImage2,
    title: "Aloo Jeera (Potato and Cumin)",
    subtitle: " by Gino D'Acampo",
    icon: Arrow,
    CookingTime: CookingTime,
    link: "chef-detail.html",
    Rating: "(4.2 /5)",
  },
  {
    image: recipeImage3,
    title: "Eggless Black Forest Cake",
    subtitle: " by Gino D'Acampo",
    icon: Arrow,
    link: "chef-detail.html",
    CookingTime: CookingTime,
    Rating: "(4.2 /5)",
  },
  {
    image: recipeImage4,
    title: "Gundruk & Sinki Soup",
    subtitle: " by Gino D'Acampo",
    icon: Arrow,
    CookingTime: CookingTime,
    link: "chef-detail.html",
    Rating: "(4.2 /5)",
  },
  {
    image: recipeImage5,
    title: "Stuffed Chicken Breast",
    subtitle: "  by Gino D'Acampo",
    icon: Arrow,
    CookingTime: CookingTime,
    link: "chef-detail.html",
    Rating: "(4.2 /5)",
  },
  {
    image: recipeImage6,
    title: "Stuffed Chicken Breast",
    subtitle: " by Gino D'Acampo",
    icon: Arrow,
    CookingTime: CookingTime,
    link: "chef-detail.html",
    Rating: "(4.2 /5)",
  },
];

class RecipeList extends Component {
  render() {
    return (
      <div>
        {RecipyList.map((value, index) => (
          <div className="recipe-list-item position-relative" key={index}>
            <figure className="mb-0">{value.image}</figure>
            <div className="recipe-info-box position-relative">
              <div className="recipe-meta clearfix">
                <div className="recipe-title position-relative d-inline-block">
                  <h2 className="fs-26 mb-1">{value.title}</h2>
                  <span className="fs-16 text-theme text-uppercase">
                    {value.AuthorName}
                  </span>
                </div>
                <div className="recipe-rating text-center bg-white float-right d-inline-block">
                  <span className="text-gray fs-16 d-block">{value.Rating}</span>
                  <div className="recipe-rating-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <ul className="recipe-cokng-meta p-0 list-unstyled mb-0 mt-2">
                {value.CookingTime}
              </ul>
              <Link
                className="rounded-circle d-inline-block text-center"
                to="/RecipeStyle1"
                title=""
              >
                <Arrow />
              </Link>
            </div>
          </div>
        ))}
        <nav className="pt-60">
          <ul className="pagination justify-content-center mb-0">
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
    );
  }
}
export default RecipeList;
