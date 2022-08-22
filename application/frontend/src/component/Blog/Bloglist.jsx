import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import BlogCotent from "../Common/BlogCotent";
import RecipeAside from "../Common/RecipeAside";

class Bloglist extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        {/* <!-- Breadcrumbs --> */}
        <Banner title="Blog List" />
        <div className="py-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <BlogCotent />
              </div>
              <div className="col-lg-4">
                <RecipeAside />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Bloglist;
