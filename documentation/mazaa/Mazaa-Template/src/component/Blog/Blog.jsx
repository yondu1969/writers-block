import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import { ReactComponent as Comment } from "../../svg/comment2.svg";
import { ReactComponent as Heart } from "../../svg/heart2.svg";
import { ReactComponent as Qoute } from "../../svg/quote.svg";
class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Blog Detail" />
        <section className="py-110">
          <div className="article-detail">
            <div className="container">
              <div className="article-img">
                <img
                  className="img-fluid"
                  src="assets/images/resources/blog-detail.jpg"
                  alt=""
                />
              </div>
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="article-content">
                    <div className="article-top-content">
                      <div className="d-flex align-items-center article-share">
                        <a
                          href="javascript:void(0)"
                          title=""
                          className="blog-date font-weight-bold text-theme"
                        >
                          20 July 2019
                        </a>
                        <ul className="list-unstyled p-0 mb-0 d-flex ml-md-5 ml-3">
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="position-relative"
                              style={{ color: "#365dce" }}
                            >
                              <i className="fa fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="position-relative"
                              style={{ color: "#e62d31" }}
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="position-relative"
                              style={{ color: "#36c8e3" }}
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="position-relative"
                              style={{ color: "#0f9cd6" }}
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h2 className="my-3">
                        Colorful Hands To Handle Creative
                      </h2>
                      <div className="article-detail-meta d-flex align-items-center mb-4">
                        <span className="fs-16">
                          <img
                            className="rounded-circle mr-2"
                            src="assets/images/resources/blog-author.jpg"
                            alt=""
                          />
                          By
                          <a
                            href="javascript:void(0)"
                            className="font-weight-bold"
                          >
                            James Smith
                          </a>
                        </span>
                        <span className="fs-16">
                          <Comment />
                          No Comments
                        </span>
                        <span className="fs-16">
                          <Heart />
                          22 Likes
                        </span>
                      </div>
                      <div className="article-cats position-relative">
                        <a href="javascript:void(0)" title="">
                          Cooking
                        </a>
                        <a href="javascript:void(0)" title="">
                          Food
                        </a>
                        <a href="javascript:void(0)" title="">
                          Recipe
                        </a>
                        <a href="javascript:void(0)" title="">
                          Idea
                        </a>
                        <a href="javascript:void(0)" title="">
                          Chef
                        </a>
                      </div>
                    </div>
                    <p className="font-weight-bold">
                      Horem ipsum dolor sit amet, consectetur a dipisicing elit.
                      Ea ratione optio nulla illum, eius do lor maiores illum,
                      sit amet, consectetur a dipis icing eit amet,.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur a dipisicing elit.
                      Ea ratione optio nulla illum, eius do lor maiores nulla
                      illum, sit amet, consectetur a dipis icing eit amet, conse
                      ulla illum, eius do lor ilmi maiores nulla illum, Lorem
                      ipsum dolor sit a m et, co nsectetur a dip onsectetur a
                      dipis icing elit. Eaisicing elit. Ea ratione o ptio nulla
                      illum, eius lla illum, Loremo lor sit amet, consectetur a
                      dipis icing eit amet, conse ulla illum, eius do lor
                      maiores nulla illum, Lorem ipsum dolor s it am et, consect
                      etur a dip onsectetur a dipis icing elit. Eaisicing nulla
                      illum, eius lla illum, Lorem ipsum dolor sit.
                    </p>

                    <p>
                      Ea ratione o ptio nulla illum, eius lla illum, Loremo lor
                      sit amet, consectetur a dipis icing eit amet, conse ulla
                      illum, eius do lor maiores nulla illum, Lorem ipsum dolor
                      s it am et, consect etur a dip onsectetur a dipis icing
                      elit. Eaisicing nulla illum, eius lla illum, Lorem ipsum
                      dolor sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/images/resources/blog-detail2.jpg"
              alt=""
            />
            <div className="container py-5">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur a dipisicing
                        elit. Ea ratione optio nulla illum, eius do lor maiores
                        nulla illum, sit amet, consectetur a dipis icing eit
                        amet, conse ulla illum, eius do lor ilmi maiores nulla
                        illuEa rat illum, Lorem ipsum dolor s it am et, consect
                        etur a dip onsectetur a dipis icing elit. Eaisicing
                        nulla illum, eius lla illum,
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Ulla illum, eius do lor ilmi maiores nulla illuEa rat
                        illum, Lorem ipsum dolor s it am et, consect etur a dip
                        onsectetur a dipis icing elit. Eaisicing nulla illum,
                        eius lla illum,
                      </p>
                    </div>
                  </div>
                  <div className="blog-quote text-center pt-80">
                    <span className="font-weight-bold d-block fs-50">
                      <Qoute />
                    </span>
                    <p className="font-weight-bold fs-30 mb-0 mt-3">
                      Torn between a rooftop bar and a tranquil country setting?
                      Take inspiration from our restaurant collections
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/images/resources/blog-detail3.jpg"
              alt=""
            />
            <div className="container py-4">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <p className="mb-0">
                    <strong className="text-theme theme-color">Point:</strong>z
                    Lorem ipsum dolor sit amet, consectetur a dipisicing elit.z
                  </p>
                </div>
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/images/resources/blog-detail4.jpg"
              alt=""
            />
            <div className="container py-4">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <p className="mb-0">
                    <strong className="text-theme theme-color">Point:</strong>z
                    Lorem ipsum dolor sit amet, consectetur a dipisicing elit.z
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-12 mx-auto">
                  <div id="comments" className="bg-gray mt-5">
                    <div className="comments-thread">
                      <h4 className="mb-4">02 Comments</h4>
                      <ul className="comments-list mb-0 list-unstyled">
                        <li>
                          <div className="comment comment-box position-relative">
                            <div className="comment-meta d-flex align-items-center mb-2">
                              <h5 className="mb-0">Rolkar James</h5>
                              <span className="text-theme ml-3">
                                Jan 22, 2022 09:19am
                              </span>
                            </div>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur a
                              dipisicing Ea ratione optio nulla illum eius do
                              lor maiores nulla illum, sit amet,z
                            </p>
                            <a
                              href="javascript:void(0)"
                              className="comment-reply-link text-white fs-14"
                            >
                              REPLY
                            </a>
                          </div>
                          <ul className="children">
                            <li>
                              <div className="comment comment-box position-relative">
                                <div className="comment-meta d-flex align-items-center mb-2">
                                  <h5 className="mb-0">Jackson Alex</h5>
                                  <span className="text-theme ml-3">
                                    Jan 22, 2022 09:19am
                                  </span>
                                </div>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur a
                                  dipisicing Ea ratione optio nulla illum eius
                                  do lor maiores nulla illum, sit amet,z
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="comment-reply-link  text-white fs-14"
                                >
                                  REPLY
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="comments reply-comments pt-3">
                      <h4 className="mb-4">Leave a Comment</h4>
                      <form>
                        <input
                          className="w-100"
                          type="text"
                          placeholder="Complete Name"
                        />
                        <input
                          className="w-100"
                          type="email"
                          placeholder="Email Address"
                        />
                        <input
                          className="w-100"
                          type="text"
                          placeholder="Website"
                        />
                        <textarea
                          className="w-100"
                          placeholder="Message"
                        ></textarea>
                        <button
                          type="submit"
                          className="theme-btn-secondary mt-3"
                        >
                          Post Comment <span></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Blog;
