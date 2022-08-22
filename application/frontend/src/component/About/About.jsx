import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "slick-carousel/slick/slick.css";
import SubscriptionFormTwo from "../Common/SubscriptionFormTwo";
import FoodRestaurants from "../Common/FoodRestaurants";
import AboutIntro from "../Common/AboutIntro";
import TopChef from "../Common/TopChef";
import Banner from "../header/Banner";
import "slick-carousel/slick/slick-theme.css";
import BookTable from "../Common/BookTable";
import SubscriptionForm from "../Common/SubscriptionForm";
import ClientReviews from "../slider/ClientReviews";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* Breadcrumbs */}
        <Banner title="About us" />
        {/* About Us Sec */}
        <AboutIntro />

        {/*Top Chefs  */}
        <TopChef />
        {/* End Top Chefs  */}

        {/* Book A Table */}
        <BookTable />
        {/* Testimonial */}
        <section className="sec-space">
          <div className="container">
            <div className="sec-heading text-center">
              <span className="text-theme fs-20 d-block mb-2 theme-color">
                What our Clients Said
              </span>
              <h2 className="text-uppercase fs-45 mb-40">Client’s Reviews</h2>
            </div>
            <div className="testimonial-slider">
              <ClientReviews />
            </div>
          </div>
        </section>
        {/* Become A Member */}
        <SubscriptionFormTwo />
        {/* Branches */}
        <FoodRestaurants />
        {/* Subscription Form */}
        <SubscriptionForm />
        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
