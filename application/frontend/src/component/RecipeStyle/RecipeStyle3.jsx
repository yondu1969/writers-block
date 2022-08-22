import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import RecipeIngredientTwo from "../Common/RecipeIngredientTwo";
import RecipeIngredientThree from "../Common/RecipeIngredientThree";
class RecipeStyle2 extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Recipe Style 3" />

        <RecipeIngredientTwo />
        {/* RecipeIngredientTwo */}

        <RecipeIngredientThree />
        {/* RecipeIngredientThree */}
        <Footer />
      </React.Fragment>
    );
  }
}
export default RecipeStyle2;
