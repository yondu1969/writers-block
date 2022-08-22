import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TabTwo from "../tab/TabTwo";
import Banner from "../header/Banner";

class Dashborad extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <Banner title="Dashboard" />
        <TabTwo />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Dashborad;
