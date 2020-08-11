import React, { Component } from 'react';

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', dish: '' };
  }

  handleNameChangeEvent = (event) => {
    this.setState({ name: event.target.value });
  }

  handleDishChangeEvent = (event) => {
    this.setState({ dish: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.addDish(this.state.name, this.state.dish, this.state.type);
    event.preventDefault();
    this.setState({
      name: "",
      dish: "",
      type: "appetizer"
    })
  }

  selectDishType = (event) => {
    this.setState({ type: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameChangeEvent}/>
        </label>
        <label>
          Dish:
            <input type="text" name="dish" value={this.state.dish} onChange={this.handleDishChangeEvent}/>
        </label>
        <select id="dishType" name="Type" value={this.state.type} onChange={this.selectDishType}>
          <option value="appetizer">Appetizer</option>
          <option value="salad">Salad</option>
          <option value="main">Main</option>
          <option value="dessert">Dessert</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default DishForm; 