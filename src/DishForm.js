import React, { Component } from 'react';

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', dish: '', type: 'appetizer', dietaryRestrictions: [] };
  }

  handleNameChangeEvent = (event) => {
    this.setState({ name: event.target.value });
  }

  handleDishChangeEvent = (event) => {
    this.setState({ dish: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.addDish(this.state.name, this.state.dish, this.state.type, this.state.dietaryRestrictions);
    event.preventDefault();
    this.setState({
      name: "",
      dish: "",
      type: "appetizer",
      dietaryRestrictions: []
    })
  }

  handleDietaryChange = (event) => {
    let restrictions = [...this.state.dietaryRestrictions];

    if (event.target.checked) {
      restrictions.push(event.target.value);
    } else {
      restrictions = restrictions.filter((restriction) => {return restriction != event.target.value});
    }

    this.setState({ 
      dietaryRestrictions: restrictions
    });
    console.log(restrictions);
  }
  

  selectDishType = (event) => {
    this.setState({ type: event.target.value });
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
        <input type="checkbox" id="nutfree" name="nutfree" value="nutfree" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("nutfree")}/>
          <label for="nutfree">This dish is nutfree</label><br/>
        <input type="checkbox" id="vegan" name="vegan" value="vegan" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("vegan")}/>
          <label for="vegan">This dish is vegan</label><br/>
        <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("vegetarian")}/>
          <label for="vegetarian">This dish is vegetarian</label><br/>
        <input type="checkbox" id="glutenfree" name="glutenfree" value="glutenfree" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("glutenfree")}/>
          <label for="glutenfree">This dish is gluten free</label><br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default DishForm; 