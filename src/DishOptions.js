import React, { Component } from 'react';

class DishOptions extends Component {
render() {
  if (this.props.enoughServings(this.props.dishType)) {
    return (
      <option value={this.props.dishType} disabled>{this.props.label}</option>
      );
  } else {
    return (
      <option value={this.props.dishType}>{this.props.label}</option>
      );
    }  
  }
}

export default DishOptions;

