import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import BlogGrids from "../Common/BlogGrids";
class Blogview extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Blog View" />
        <BlogGrids />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Blogview;
