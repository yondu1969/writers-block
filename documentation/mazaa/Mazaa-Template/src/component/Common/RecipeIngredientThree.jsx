import React, { Component } from "react";
class RecipeIngredientThree extends Component {
  render() {
    return (
      <section className="sec-space">
        <div className="container bg-white">
          <div className="row">
            <div className="col-md-12">
              <div className="special-ingradient d-flex justify-content-lg-around">
                <div className="Ingredient-list">
                  <h3>Ingredients</h3>
                  <ul className="w-100">
                    <li>Dairy Products</li>
                    <li>Fruits</li>
                    <li>Meat</li>
                    <li>Sugar and Sugar Products</li>
                    <li>Nuts and Oilseeds</li>
                    <li>Seafood</li>
                    <li>Spices and Herbs</li>
                    <li>Vegetables</li>
                    <li>Cereals and Pulses</li>
                  </ul>
                </div>
                <div className="pl-130">
                  <h3>Directions</h3>
                  <ul className="list-unstyled gradient-list ">
                    <li className="d-flex">
                      <h3>1</h3> For the marinade, combine sake and mirin in a
                      medium sauce- pan over high heat. Boil for 30 seconds.
                      Turn heat to low and add miso paste and soy sauce,
                      stirring until the paste is completely dissolved.
                    </li>
                    <li className="d-flex">
                      <h3>2</h3> Pat the cod fillets dry with paper towels.
                      Place fish in a large resealable plastic bag and pour in
                      the marinade. Refrigerate 12-24 hours, turning fish
                      occasionally.
                    </li>
                    <li className="d-flex">
                      <h3>3</h3>Preheat oven to 450°F. Line a baking sheet with
                      aluminum foil and coat with non-stick cooking spray.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h3>Nutritions</h3>
          <p className="end-descrip">
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex.
          </p>
        </div>
      </section>
    );
  }
}
export default RecipeIngredientThree;
