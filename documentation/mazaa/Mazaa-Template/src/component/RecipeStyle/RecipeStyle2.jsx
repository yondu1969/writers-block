import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import RecipeIngredientOne from "../Common/RecipeIngredientOne";
import Banner from "../header/Banner";
class RecipeStyle2 extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Recipe Style 2" />
        <RecipeIngredientOne />
        {/* RecipeIngredientOne */}
        <Footer />
      </React.Fragment>
    );
  }
}
export default RecipeStyle2;
