import React from 'react';

const DishOptions = (props) => {
  if (props.enoughServings(props.dishType)) {
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

