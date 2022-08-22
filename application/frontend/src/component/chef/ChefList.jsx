import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import ChefListPage from "../Common/ChefListPage";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
class chefdetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <Banner title="Chef List Page" />
        <ChefListPage />
        <Footer />
      </React.Fragment>
    );
  }
}
export default chefdetail;
