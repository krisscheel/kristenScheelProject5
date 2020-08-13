import React, { Component } from 'react';
import Counter from './Counter';
import DishOptions from './DishOptions';

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', dish: '', type: 'chooseOne', dietaryRestrictions: [] };
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
      type: "chooseOne",
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

  enoughServings = (dishType) => {
    let numServings = this.props.servings[dishType];

    const dishes = this.props.dishes;
    for (let i in dishes) {
      if (dishes[i].type == dishType) {
        numServings = numServings - 1;
      }
    }
    return numServings == 0;
  }

  render() {
    return (
      <div class="formBox">
        <div class="box formBoxInterior wrapper">
          <Counter dishes={this.props.dishes} servings={this.props.servings} />
          <form class="dishForm" onSubmit={this.handleSubmit}>
            <div class="formTop">
              <label class="formLabel formLabelTop">Name: <input class="inputBox" type="text" name="name" value={this.state.name} onChange={this.handleNameChangeEvent} required/></label>
              <label class="formLabel formLabelTop">Dish: <input class="inputBox" type="text" name="dish" value={this.state.dish} onChange={this.handleDishChangeEvent} required/></label>
            </div>
            <select class="dishTypeSelect" id="dishType" name="Type" value={this.state.type} onChange={this.selectDishType} required>
              <option value="chooseOne" disabled>select a category</option>
              <DishOptions enoughServings={this.enoughServings} dishType={"appetizer"} label={"Appetizer"}/>
              <DishOptions enoughServings={this.enoughServings} dishType={"salad"} label={"Salad"} />
              <DishOptions enoughServings={this.enoughServings} dishType={"main"} label={"Main"} />
              <DishOptions enoughServings={this.enoughServings} dishType={"dessert"} label={"Dessert"} /> 
            </select>
            <div class="checkboxes">
              <h3>Check all that apply to your dish:</h3>
              <div class="formLabel">
                <label for="nutfree">nut-free </label><input type="checkbox" id="nutfree" name="nutfree" value="nutfree" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("nutfree")}/>
              </div>
              <div class="formLabel">
                <label for="vegan">vegan </label><input type="checkbox" id="vegan" name="vegan" value="vegan" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("vegan")}/>
              </div>
              <div class="formLabel">
                <label for="vegetarian">vegetarian </label><input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("vegetarian")}/>
              </div>
              <div class="formLabel">
                <label for="glutenfree">gluten-free </label><input type="checkbox" id="glutenfree" name="glutenfree" value="glutenfree" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("glutenfree")}/>
              </div>
              <input class="submitButton" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default DishForm; 