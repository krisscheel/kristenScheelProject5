import React from 'react';

// function component which displays the number of dishes of a particular category that are still needed.
const Counter = (props) => {
  return (
    <div class="counter">
      <h2>Sign Up To Bring a Dish</h2>
      <h3>We need: {props.dishTypeNeeded("appetizer")} appetizers, {props.dishTypeNeeded("salad")} salads, {props.dishTypeNeeded("main")} mains & {props.dishTypeNeeded("dessert")} desserts.</h3>
    </div>
  )
}

export default Counter; 