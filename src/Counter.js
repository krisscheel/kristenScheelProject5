import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let appetizers = 5;
    let salads = 5;
    let mains = 5;
    let desserts = 5;

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
    <div>
      <h2>We still need {appetizers} appetizers</h2>
      <h2>We still need {salads} salads</h2>
      <h2>We still need {mains} mains</h2>
      <h2>We still need {desserts} desserts</h2>
    </div>
    )
  }
}

export default Counter; 