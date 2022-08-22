import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import RecipeGrid from "../Common/RecipeGrid";

class RecipeGridView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="position-relative top-banner bg-gray">
          <div
            className="bg-fixed"
            style={{
              backgroundImage: "url(" + "assets/images/mazaa-pattern.png" + ")",
            }}
          ></div>
          <div className="top-banner-content text-center">
            <div className="baner-name">
              <h2 className="fs-50 text-uppercase">recipe grid</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center p-0 mb-0">
                  <li className="breadcrumb-item text-gray fs-18 fm-arimo">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active text-theme fs-18 fm-arimo">
                    <a href="javascript:void(0)">Recipe Grid</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <RecipeGrid />
        <Footer />
      </React.Fragment>
    );
  }
}
export default RecipeGridView;
