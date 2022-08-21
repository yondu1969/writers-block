import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SubscriptionForm from "../Common/SubscriptionForm";
import HomeOneSlider from "../slider/HomeOneSlider";
import RecipeSlider from "../slider/RecipeSlider";
import Service from "../Common/Service";
import TopChef from "../Common/TopChef";
import SingleRecipe from "../Common/SingleRecipe";
import Blog from "../Common/Blog";
import BookTable from "../Common/BookTable";
import TabOne from "../tab/TabOne";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="slider-section position-relative">
          <HomeOneSlider />
        </section>
        {/* Food Category */}
        <section>
          <Service />
        </section>
        <section>
          <SingleRecipe />
        </section>
        {/* Single Recipe */}
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
                    <h2 className="text-uppercase fs-45 mb-40">today recipes</h2>
                  </div>
                </div>
              </div>
              <RecipeSlider />
            </div>
          </div>
        </section>
        {/* Book A Table  */}
        <BookTable />
        {/* End Book A Table  */}
        {/* Recipes Tabs  */}
        <div className="sec-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-heading text-center">
                  <span className="text-theme theme-color fs-20 d-block">
                    What you Like in
                  </span>
                  <h2 className="text-uppercase fs-50">delicious recipe</h2>
                </div>
              </div>
            </div>
            <div className="recipe-tabs">
             
              <div className="tab-content">
                <TabOne />
              </div>
            </div>
          </div>
        </div>
        {/* End Recipes Tabs  */}
        {/*Top Chefs  */}
        <TopChef />
        {/* End Top Chefs  */}
        {/* News */}
        <Blog />
        {/* End News */}
        {/* Subscription Form */}
        <SubscriptionForm />
        {/* End Subscription Form */}
        <Footer />
      </Fragment>
    );
  }
}
export default Homepage;
