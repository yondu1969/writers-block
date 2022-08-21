import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { ReactComponent as Phone } from "../../svg/phone-call.svg";
import { ReactComponent as Email } from "../../svg/mail.svg";
import ChefDetailOne from "../Common/ChefDetailOne";
import BookTable from "../Common/BookTable";
import QuoteDay from "../Common/QuoteDay";
import Banner from "../header/Banner";
import RecipeSlider from "../slider/RecipeSlider";
class ChefDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <Banner title="Chef Detail" />
        <main>
          <ChefDetailOne />
          {/* ChefDetailOne */}

          <QuoteDay />
          {/* QuoteDay */}
          {/* <!-- Recipes Carousel --> */}
          <section className="recipe-main">
            <div className="sec-space bg-gray">
              <div
                className="parallax"
                style={{
                  backgroundImage:
                    "url(" + "assets/images/resources/bg-pattern.jpg" + ")",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading text-center">
                      <span className="text-theme theme-color fs-20 d-block mb-2">
                        Delicious Taste of
                      </span>
                      <h2 className="text-uppercase fs-45 mb-40">
                        today recipes
                      </h2>
                    </div>
                  </div>
                </div>
                <RecipeSlider />
              </div>
            </div>
          </section>
          <section>
            {/* <!-- Book A Table  --> */}

            <BookTable />
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default ChefDetail;
