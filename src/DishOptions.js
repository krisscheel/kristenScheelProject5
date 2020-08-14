import React from 'react';

//function component that checks if the number of dishes in the category is 0. If it is, disable the option on the select menu on the dropdown menu so that users can no longer select this category.
const DishOptions = (props) => {
  if ( props.dishTypeNeeded(props.dishType) == 0 ) {
    return (
      <option value={props.dishType} disabled>{props.label}</option>
    );
  } else {
    return (
      <option value={props.dishType}>{props.label}</option>
    );
  }
}

export default DishOptions;

