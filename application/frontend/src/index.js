import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ChefDetail from "./component/chef/ChefDetail";
import ChefList from "./component/chef/ChefList";
import Blogview from "./component/Blog/Blogview";
import Bloglist from "./component/Blog/Bloglist";
import Blog from "./component/Blog/Blog";
import About from "./component/About/About";
import RecipeStyle1 from "./component/RecipeStyle/RecipeStyle1";
import RecipeStyle2 from "./component/RecipeStyle/RecipeStyle2";
import RecipeStyle3 from "./component/RecipeStyle/RecipeStyle3";
import RecipeStyle4 from "./component/RecipeStyle/RecipeStyle4";
import RecipeGridView from "./component/RecipeStyle/RecipeGridView";
import RecipeListView from "./component/RecipeStyle/RecipeListView";
import Dashboard from "./component/Dashoard/Dashboard";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Contact from "./component/Contact/Contact";
import Homepage from "./component/home/Homepage";
import Homepage2 from "./component/home/Homepage2";
import OurHistory from "./component/ourhistory/OurHistory";
import BookingTable from "./component/BookingTable/BookingTable";
import HowToPage from "./component/howtopage/HowToPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Homepage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Homepage2`}
            component={Homepage2}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/About`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Blog`}
            component={Blog}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Blogview`}
            component={Blogview}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Bloglist`}
            component={Bloglist}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/ChefDetail`}
            component={ChefDetail}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/ChefList`}
            component={ChefList}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/RecipeStyle1`}
            component={RecipeStyle1}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/RecipeStyle2`}
            component={RecipeStyle2}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/RecipeStyle3`}
            component={RecipeStyle3}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/RecipeStyle4`}
            component={RecipeStyle4}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/RecipeGridView`}
            component={RecipeGridView}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/RecipeListView`}
            component={RecipeListView}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/OurHistory`}
            component={OurHistory}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/HowToPage`}
            component={HowToPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/BookingTable`}
            component={BookingTable}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Dashboard`}
            component={Dashboard}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// reportWebVitals();
