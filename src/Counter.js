import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.setState ({type: "appetizer"});
  }

  render() {
    const servings = this.props.servings; 
    let appetizers = servings.appetizer;
    let salads = servings.salad;
    let mains = servings.main;
    let desserts = servings.dessert;

    const dishes = this.props.dishes;
    for (let i in this.props.dishes) {
      if (dishes[i].type == "appetizer") {
        appetizers = appetizers - 1;
      } else if (dishes[i].type == "salad") {
        salads = salads - 1;
      } else if (dishes[i].type == "main") {
        mains = mains - 1;
      } else if (dishes[i].type == "dessert") {
        desserts = desserts - 1;
      }
    }

    return (
    <div class="counter">
      <h2>Sign Up To Bring a Dish</h2>
      <h3>We need: {appetizers} appetizers, {salads} salads, {mains} mains & {desserts} desserts.</h3>
    </div>
    )
  }
}

export default Counter; 