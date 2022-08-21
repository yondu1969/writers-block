import React, { Component } from "react";
import { Link } from "react-router-dom";
class RecipeAside extends Component {
  render() {
    return (
      <aside>
        <div className="widget">
          <h4 className="fs-20 mb-20">Best Recipes</h4>
          <div className="bst-recipe-widget">
            <div className="d-flex bst-recipe-item align-items-start">
              <a href="javascript:void(0)" title="">
                <img src="assets/images/resources/b-recipe1.jpg" alt="" />
              </a>
              <div>
                <span className="fs-14 text-theme text-uppercase pb-2 d-block">
                  By Frederick
                </span>
                <h5 className="fs-16 font-weight-semibold mb-0">
                  <Link to="/RecipeStyle4"> Lemon Chicken Skillet Dinner</Link>
                </h5>
              </div>
            </div>
            <div className="d-flex bst-recipe-item align-items-start">
              <a href="javascript:void(0)" title="">
                <img src="assets/images/resources/b-recipe2.jpg" alt="" />
              </a>
              <div>
                <span className="fs-14 text-theme text-uppercase pb-2 d-block">
                  By Gabriel
                </span>
                <h5 className="fs-16 font-weight-semibold mb-0">
                  <Link to="/RecipeStyle4">
                    Spaghetti with Chilli and Garlic
                  </Link>
                </h5>
              </div>
            </div>
            <div className="d-flex bst-recipe-item align-items-start">
              <a href="javascript:void(0)" title="">
                <img src="assets/images/resources/b-recipe3.jpg" alt="" />
              </a>
              <div>
                <span className="fs-14 text-theme text-uppercase pb-2 d-block">
                  by Gino D'Acampo
                </span>
                <h5 className="fs-16 font-weight-semibold mb-0">
                  <Link to="/RecipeStyle4">salad to sneak in veggie</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="widget">
          <h4 className="fs-20 mb-20">Categories</h4>
          <ul className="list-unstyled mb-0 pt-0 cat-widget">
            <li className="d-flex justify-content-between">
              <a
                href="javascript:void(0)"
                className="text-gray fs-16 font-family-arimo"
              >
                Sea Food
              </a>
              <span className="text-gray fs-16 font-family-arimo">25</span>
            </li>
            <li className="d-flex justify-content-between">
              <a
                href="javascript:void(0)"
                className="text-gray fs-16 font-family-arimo"
              >
                Recipe
              </a>
              <span className="text-gray fs-16 font-family-arimo">25</span>
            </li>
            <li className="d-flex justify-content-between">
              <a
                href="javascript:void(0)"
                className="text-gray fs-16 font-family-arimo"
              >
                Ideas{" "}
              </a>
              <span className="text-gray fs-16 font-family-arimo">25</span>
            </li>
            <li className="d-flex justify-content-between">
              <a
                href="javascript:void(0)"
                className="text-gray fs-16 font-family-arimo"
              >
                Dessert
              </a>
              <span className="text-gray fs-16 font-family-arimo">25</span>
            </li>
            <li className="d-flex justify-content-between">
              <a
                href="javascript:void(0)"
                className="text-gray fs-16 font-family-arimo"
              >
                Fruits
              </a>
              <span className="text-gray fs-16 font-family-arimo">25</span>
            </li>
            <li className="d-flex justify-content-between">
              <a
                href="javascript:void(0)"
                className="text-gray fs-16 font-family-arimo"
              >
                Sushi{" "}
              </a>
              <span className="text-gray fs-16 font-family-arimo">25</span>
            </li>
          </ul>
        </div>
        <div className="widget">
          <h4 className="fs-20 mb-20">Useful Links</h4>
          <ul className="list-unstyled m-0 p-0 useful-links">
            <li className="position-relative">
              <a className="text-gray fs-16" href="javascript:void(0)">
                Speacial Items
              </a>
            </li>
            <li className="position-relative">
              <a className="text-gray fs-16" href="javascript:void(0)">
                Fresh Breakfast
              </a>
            </li>
            <li className="position-relative">
              <a className="text-gray fs-16" href="javascript:void(0)">
                Lunch Menu
              </a>
            </li>
            <li className="position-relative">
              <a className="text-gray fs-16" href="javascript:void(0)">
                Dinner Items
              </a>
            </li>
            <li className="position-relative">
              <a className="text-gray fs-16" href="javascript:void(0)">
                We Offerd Food
              </a>
            </li>
          </ul>
        </div>
        <div className="widget">
          <h4 className="fs-20 mb-20">Instagram</h4>
          <div className="insta-widget">
            <div className="insat-imgs-wrapper">
              <a
                href="assets/images/resources/insta-1.jpg"
                data-fancybox="gallery"
              >
                <img src="assets/images/resources/insta-1.jpg" alt="" />
              </a>
              <a href="assets/images/insta-2.jpg" data-fancybox="gallery">
                <img src="assets/images/resources/insta-2.jpg" alt="" />
              </a>
              <a
                href="assets/images/resources/insta-3.jpg"
                data-fancybox="gallery"
              >
                <img src="assets/images/resources/insta-3.jpg" alt="" />
              </a>
              <a
                href="assets/images/resources/insta-4.jpg"
                data-fancybox="gallery"
              >
                <img src="assets/images/resources/insta-4.jpg" alt="" />
              </a>
              <a
                href="assets/images/resources/insta-5.jpg"
                data-fancybox="gallery"
              >
                <img src="assets/images/resources/insta-5.jpg" alt="" />
              </a>
              <a
                href="assets/images/resources/insta-6.jpg"
                data-fancybox="gallery"
              >
                <img src="assets/images/resources/insta-6.jpg" alt="" />
              </a>
            </div>
            <a
              href="javascript:void(0)"
              className="text-theme d-block text-center insta-follow mt-25"
            >
              <i className="fa fa-instagram"></i>
              <span className="text-uppercase font-weight-bold fs-16">
                Follow Me
              </span>
            </a>
          </div>
        </div>
      </aside>
    );
  }
}
export default RecipeAside;
