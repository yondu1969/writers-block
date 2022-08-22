import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import HowPage from "../Common/HowPage";

class HowToPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="HOW TO PAGE" />
        <section>
          <HowPage />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default HowToPage;
