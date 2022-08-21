import React, { Component } from "react";
class HowPage extends Component {
  render() {
    return (
      <section className="sec-space">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center fs-50">How To Cook....</h2>
              <p className="text-center fs-18 recipe-descrip">
                lipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-md-6">
              <div>
                <div className="recipy-style2 position-relative">
                  <span>1</span>
                  <img alt="recipe-1" src="assets/images/1-recipe.jpg" />
                  <p>
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
                <div className="recipy-style2 position-relative">
                  <span>3</span>
                  <img alt="recipe-2" src="assets/images/2-recipe.jpg" />
                  <p>
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="recipy-style2 position-relative">
                  <span>2</span>
                  <img alt="recipe-3" src="assets/images/3-recipe.jpg" />
                  <p>
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
                <div className="recipy-style2 position-relative">
                  <span>4</span>
                  <img alt="recipe-4" src="assets/images/4-recipe.jpg" />
                  <p>
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HowPage;
