import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as Fish } from "../../svg/fish.svg";
import { ReactComponent as Noodles } from "../../svg/noodles.svg";
import { ReactComponent as Radish } from "../../svg/radish.svg";
import { ReactComponent as CupCake } from "../../svg/cup-cake.svg";
import { ReactComponent as Steak } from "../../svg/steak.svg";

class TabOne extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>
            <div className="recipe-tabs">
              <span className=" text-capitalize fs-18  text-black">
                <Fish />
                fish
              </span>
            </div>
          </Tab>
          <Tab>
            <Steak />
            <span className=" text-capitalize fs-18  text-black">meat</span>
          </Tab>
          <Tab>
            <Radish />
            <span className=" text-capitalize fs-18  text-black">dessert</span>
          </Tab>
          <Tab>
            <CupCake />
            <span className=" text-capitalize fs-18  text-black">vegetable</span>
          </Tab>
          <Tab>
            <Noodles />
            <span className=" text-capitalize fs-18  text-black">pastas</span>
          </Tab>
        </TabList>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30"> Garlic Butter Fish</h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="text-gray fs-16">
                        <strong>Recipe by:</strong> James Smith
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="mb-20">Ingredients</h4>
                      <ul className="m-0 p-0 list-unstyled">
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 tsp. granulated sugar{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>Black pepper
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1/2 small red onion
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>5 cloves garlic{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 cup butter, melted
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>thinly sliced
                        </li>
                      </ul>
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="javascript:void(0)"
                    >
                      <i className="flaticon-chef-2"></i>I MADE IT!
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure className="mb-0">
                      <img src="assets/images/tab-img.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-lower-content">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img1.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        The Perfect Chocolate Cake
                      </Link>
                    </h5>
                    <span className="text-them">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img2.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Baked Pastas That Are Crazy
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gabriel Jakson</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img3.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Cream Filled Yellow Cake
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Fredrieck William</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img4.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Hummingbird Cake Recipy
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">
                      Minute Egg on Creamy Polenta with Crispy
                    </h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="text-gray fs-16">
                        <strong>Recipe by:</strong> James Smith
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">Ingredients</h4>
                      <ul className="m-0 p-0 list-unstyled">
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 tsp. granulated sugar{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>Black pepper
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1/2 small red onion
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>5 cloves garlic{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 cup butter, melted
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>thinly sliced
                        </li>
                      </ul>
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="javascript:void(0)"
                    >
                      <i className="flaticon-chef-2"></i>I MADE IT!
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img2.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-lower-content">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img1.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Spaghetti with Chilli and Garlic
                      </Link>
                    </h5>
                    <span className="text-them">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img2.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        salad to sneak in veggie
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gabriel Jakson</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img3.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Lemon Chicken Skillet Dinner
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Fredrieck William</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img4.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Plus kid-pleasing snack
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="show active">
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">Taste Lime Slime Garnished</h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="text-gray fs-16">
                        <strong>Recipe by:</strong> James Smith
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">Ingredients</h4>
                      <ul className="m-0 p-0 list-unstyled">
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 tsp. granulated sugar{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>Black pepper
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1/2 small red onion
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>5 cloves garlic{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 cup butter, melted
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>thinly sliced
                        </li>
                      </ul>
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="recipy-style-2.html"
                    >
                      <i className="flaticon-chef-2"></i>I MADE IT!
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img3.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-lower-content">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img1.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link title="" to="/RecipeStyle1">
                        Spaghetti with Chilli and Garlic
                      </Link>
                    </h5>
                    <span className="text-them">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img2.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1">salad to sneak in veggie</Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gabriel Jakson</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img3.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1">
                        {" "}
                        Lemon Chicken Skillet Dinner
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Fredrieck William</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img4.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1">Plus kid-pleasing snack</Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">Crab Appetizer Dish</h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="text-gray fs-16">
                        <strong>Recipe by:</strong> James Smith
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">Ingredients</h4>
                      <ul className="m-0 p-0 list-unstyled">
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 tsp. granulated sugar{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>Black pepper
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1/2 small red onion
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>5 cloves garlic{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 cup butter, melted
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>thinly sliced
                        </li>
                      </ul>
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="javascript:void(0)"
                    >
                      <i className="flaticon-chef-2"></i>I MADE IT!
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img4.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-lower-content">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img1.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Spaghetti with Chilli and Garlic
                      </Link>
                    </h5>
                    <span className="text-them">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img2.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        salad to sneak in veggie
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gabriel Jakson</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img3.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Lemon Chicken Skillet Dinner
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Fredrieck William</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img4.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Plus kid-pleasing snack
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">Brooke's Best Bombshell Brownies</h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="text-gray fs-16">
                        <strong>Recipe by:</strong> James Smith
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">Ingredients</h4>
                      <ul className="m-0 p-0 list-unstyled">
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 tsp. granulated sugar{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>Black pepper
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1/2 small red onion
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>5 cloves garlic{" "}
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>1 cup butter, melted
                        </li>
                        <li className="text-gray pb-2">
                          <i className="fa fa-check"></i>thinly sliced
                        </li>
                      </ul>
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="javascript:void(0)"
                    >
                      <i className="flaticon-chef-2"></i>I MADE IT!
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img5.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-lower-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img1.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Spaghetti with Chilli and Garlic
                      </Link>
                    </h5>
                    <span className="text-them">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img2.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        salad to sneak in veggie
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gabriel Jakson</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img3.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Lemon Chicken Skillet Dinner
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Fredrieck William</strong>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tab-box-item">
                    <figure>
                      <img
                        src="assets/images/resources/tab-lowr-img4.jpg"
                        alt=""
                      />
                    </figure>
                    <h5 className="h5 font-weight-semibold">
                      <Link to="/RecipeStyle1" title="">
                        Plus kid-pleasing snack
                      </Link>
                    </h5>
                    <span className="text-theme">
                      By <strong>Gino D'Acampo</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}
export default TabOne;
