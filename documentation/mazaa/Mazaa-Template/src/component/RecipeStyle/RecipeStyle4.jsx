import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import RecipeIngredientFour from "../Common/RecipeIngredientFour";
import RecipeIngredientFive from "../Common/RecipeIngredientFive";
class RecipeStyle2 extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Recipe Style 4" />

        <RecipeIngredientFour />
        {/* RecipeIngredientFour */}

        <RecipeIngredientFive />
        {/* RecipeIngredientFive */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default RecipeStyle2;
