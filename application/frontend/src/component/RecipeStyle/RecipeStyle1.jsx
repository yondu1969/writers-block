import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import RecipeDetail from "../Common/RecipeDetail";
import { ReactComponent as Login } from "../../svg/login.svg";
class RecipeStyle1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <Banner title="Recipe Style 1" />
        <main>
          <RecipeDetail />
          {/* RecipeDetail */}
          <section className="pb-110">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="recipe-detail-content">
                    <p className="fs-18">
                      Lorem ipsum dolor sit amet, consectetur a dipisicing elit.
                      Ea ratione optio nulla illum, eius do lor maiores nulla
                      illum, sitiamet, consectetur a dipis icing eit amet, conse
                      ulla illum, eius do lor maiores nulla illum, Lorem ipsum
                      dolor sit a et, coinsectetur a dip onsectetur a dipis
                      icing elit. Eaisicing elit. Ea ratione o ptio nulla illum,
                      eius lla illum, Loremo lor sit amet, consectetur a dipis
                      icing eit amet, conse ulla illum, eius do lor maiores
                      nulla illum, Lorem ipsum dolor s it am et, consecetur a
                      dip onsectetur a dipis icing elit. Eaisicing nulla illum,
                      eius lla illum, Lorem ipsum dolor sit.
                    </p>

                    <p className="fs-18">
                      Ea ratione o ptio nulla illum, eius lla illum, Loremo lor
                      sit amet, consectetur a dipis icing eit amet, conse ulla
                      illum, us do lor maiores nulla illum, Lorem ipsum dolor s
                      it am et, consect etur a dip onsectetur a dipis icing
                      elit. Eaisicing nulla illum, eius lla illum, Lorem ipsum
                      dolor sit.
                    </p>

                    <div className="meal-cooking">
                      <div className="row">
                        <div className="col-md-5">
                          <h6 className="fs-38 mb-4">Ingredients</h6>
                          <ul className="p-0 m-0 list-unstyled meal-indi">
                            <li>
                              <i className="fa fa-check"></i>1/3 cup of sugar
                            </li>
                            <li>
                              <i className="fa fa-check"></i>2 eggs
                            </li>
                            <li>
                              <i className="fa fa-check"></i>1 tea spoon of soda
                            </li>
                            <li>
                              <i className="fa fa-check"></i>100 grams of butter
                            </li>
                            <li>
                              <i className="fa fa-check"></i>1/4 cup of semolina
                            </li>
                            <li>
                              <i className="fa fa-check"></i>100 grams of butter
                            </li>
                            <li>
                              <i className="fa fa-check"></i>250 ml of milk
                            </li>
                            <li>
                              <i className="fa fa-check"></i>1 lemon, juice only
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-7">
                          <div className="vid-area">
                            <figure className="mb-0 position-relative">
                              <img
                                className="img-fluid"
                                src="assets/images/resources/vid-img.jpg"
                                alt=" "
                              />
                              <a
                                className="popup-vid text-center rounded-circle text-white"
                                data-fancybox="iframe"
                                href="https://www.youtube.com/watch?v=XBJKi2tcKkE"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="meal-inst pt-80">
                        <h6 className="fs-38 mb-4">Instructions</h6>
                        <ul className="p-0 m-0 list-unstyled">
                          <li>
                            <i className="fa fa-circle"></i>Melt butter and honey in
                            small pot, remove from heat and cool down.
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Whip eggs with sugar
                            over warm bath.
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Mix butter & honey
                            mixture with flour, baking soda, eggs and sugar,
                            knead the dough.
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Bake in preheated oven
                            in 180 C degrees about 5 minutes, till it turns
                            golden brown.
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Mix butter with sugar,
                            then add semolina bit by bit, add lemon juice and a
                            few drops of almond oil.
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>To assemble the cake
                            smear firs layer with blackcurrant jelly, then with
                            cream and cover with second layer of cake, repeat
                            the procedure.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="recipe-gal pt-60 pb-70">
                      <div className="row">
                        <div className="col-md-4">
                          <a
                            className="wow fadeIn"
                            href="assets/images/resources/reci-gal1.jpg"
                            data-fancybox
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/resources/reci-gal1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-8">
                          <a
                            className="wow fadeIn"
                            href="assets/images/resources/reci-gal2.jpg"
                            data-fancybox
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/resources/reci-gal2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            className="wow fadeIn"
                            href="assets/images/resources/reci-gal3.jpg"
                            data-fancybox
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/resources/reci-gal3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            className="wow fadeIn"
                            href="assets/images/resources/reci-gal4.jpg"
                            data-fancybox
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/resources/reci-gal4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            className="wow fadeIn"
                            href="assets/images/resources/reci-gal5.jpg"
                            data-fancybox
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/resources/reci-gal5.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="about-chef-box position-relative">
                      <div
                        className="chef-bg wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                        style={{
                          backgroundImage:
                            "url(" +
                            "assets/images/resources/chef-pattern.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="chef-avatar">
                            <img
                              src="assets/images/resources/main-chef.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="recipe-chef">
                            <span className="text-theme theme-color font-weight-bold text-uppercase">
                              Made By Me
                            </span>
                            <h4 className="fs-26 text-uppercase">
                              <a href="chef-detail.html">James Smith</a>
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur a
                              dipisicing ratione op nulla illum, eius do lor
                              maiores nullalu il met, consectetur a dipilorimesa
                              ulmes uil oil cing eit amet
                            </p>
                            <ul className="chef-social list-unstyled p-0 mb-0 mt-30">
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  className="rounded-circle d-inline-block"
                                  style={{ backgroundColor: "#365dce" }}
                                >
                                  <i className="fa fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  className="rounded-circle d-inline-block"
                                  style={{ backgroundColor: "#e62d31" }}
                                >
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  className="rounded-circle d-inline-block"
                                  style={{ backgroundColor: "#36c8e3" }}
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  className="rounded-circle d-inline-block"
                                  style={{ backgroundColor: "#0f9cd6" }}
                                >
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="woocommerce-Reviews mt-5">
                      <img src="assets/images/img-95.webp" alt="product" />
                      <div className="comment-text">
                        <div className="comment-date d-flex justify-content-between">
                          <div className="comment-1">
                            <h3>Rolkar james</h3>
                            <span className="theme-color">JAN 22,2019 09-12am</span>
                          </div>
                          <div>
                            <div className="recipe-rating-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          Etiam semper nibh orci, ac tincidunt mi consectetur a.
                          In quis tortor ex. Morbi cursus sed neque quis dictum.
                          Duis bibendum ullamcorper pharetra, Viva mus quis
                          turpis et enim volutpat convallls.
                        </p>
                      </div>
                    </div>
                    <div className="leave-review bg-gray">
                      <div className="review-title d-sm-flex justify-content-between mb-4 align-items-center">
                        <h4 className="mb-0">
                          <Login />
                          Login to write a review
                        </h4>
                        <a href="javascript:void(0)" title="">
                          FORGET PASSWORD?
                        </a>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-sm-3">
                            <label>Username or E-mail</label>
                          </div>
                          <div className="col-sm-9">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <label>Password</label>
                          </div>
                          <div className="col-sm-9">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-9">
                            <button
                              className="theme-btn-secondary mt-3"
                              type="submit"
                            >
                              LOGIN<span></span>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="signup-options d-flex justify-content-between align-items-center">
                        <a
                          href="javascript:void(0)"
                          className="theme-btn-secondary"
                        >
                          Create an Account<span></span>
                        </a>
                        <div className="social-connect d-flex align-items-center">
                          <span className="mr-3 fs-18">Connect with Us:</span>
                          <ul className="contact-social list-unstyled d-flex mb-0">
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#365dce" }}
                              >
                                <i className="fa fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#e62d31" }}
                              >
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#36c9e4" }}
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#0f9cd6" }}
                              >
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default RecipeStyle1;
