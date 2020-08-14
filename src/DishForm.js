import React, { Component } from 'react';
import Counter from './Counter';
import DishOptions from './DishOptions';

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', dish: '', type: 'chooseOne', dietaryRestrictions: [] };
  }

  //function grabs what user is typing in name field on form, and uses it to set the state
  handleNameChangeEvent = (event) => {
    this.setState({ name: event.target.value });
  }

  //function grabs what user is typing in the dish field on form, and usese it to set the state
  handleDishChangeEvent = (event) => {
    this.setState({ dish: event.target.value });
  }

  //function grabs the different parts of the form (name, dish, type, dietary restrictions), calls the addDish function (from App.js) to push the data to firebase, then reset form state to blank/default.
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

  //function handles adding and removing dietary restrictions
  handleDietaryChange = (event) => {

    //copy the array in order to manipulate
    let restrictions = [...this.state.dietaryRestrictions];

    //if new restriction was added, push it onto the array
    if (event.target.checked) {
      restrictions.push(event.target.value);
    } else {
      //if one of the checkboxes was checked, and then unchecked, remove it from the list
      restrictions = restrictions.filter((restriction) => {return restriction != event.target.value});
    }

    //set state of new array (restricitons)
    this.setState({ 
      dietaryRestrictions: restrictions
    });
  }
  
  // function to check what category of dish type user selects (appetizer, salad, main, dessert), and set state
  selectDishType = (event) => {
    this.setState({ type: event.target.value });
  }

  // function to calculate how many dishes of each type are still needed (by decrimenting the category by one if it matches the parameter value). 
  dishTypeNeeded = (dishType) => {
    let numServings = this.props.servings[dishType];

    const dishes = this.props.dishes;
    for (let i in dishes) {
      if (dishes[i].type == dishType) {
        numServings = numServings - 1;
      }
    }
    return numServings;
  }

  render() {
    return (
      <div class="formBox">
        <div class="box formBoxInterior wrapper">
            <Counter dishTypeNeeded={this.dishTypeNeeded} />
            <form class="dishForm" onSubmit={this.handleSubmit}>
              <div class="formTop">
                <label class="formLabel formLabelTop">Name: <input class="inputBox" type="text" name="name" maxlength="20" value={this.state.name} onChange={this.handleNameChangeEvent} required/></label>
                <label class="formLabel formLabelTop">Dish: <input class="inputBox" type="text" name="dish" maxlength="30" value={this.state.dish} onChange={this.handleDishChangeEvent} required/></label>
              </div>
              <select class="dishTypeSelect" id="dishType" name="Type" value={this.state.type} onChange={this.selectDishType} required>
                <option value="chooseOne" disabled>select a category</option>
                <DishOptions dishTypeNeeded={this.dishTypeNeeded} dishType={"appetizer"} label={"Appetizer"}/>
                <DishOptions dishTypeNeeded={this.dishTypeNeeded} dishType={"salad"} label={"Salad"} />
                <DishOptions dishTypeNeeded={this.dishTypeNeeded} dishType={"main"} label={"Main"} />
                <DishOptions dishTypeNeeded={this.dishTypeNeeded} dishType={"dessert"} label={"Dessert"} /> 
              </select>
              <div class="checkboxes">
                <h3>Check all that apply to your dish:</h3>
                  <div class="checksOnly">
                    <div class="formLabel">
                      <label for="nut-free">nut-free </label><input type="checkbox" id="nut-free" name="nut-free" value="nut-free" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("nut-free")}/>
                    </div>
                    <div class="formLabel">
                      <label for="vegan">vegan </label><input type="checkbox" id="vegan" name="vegan" value="vegan" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("vegan")}/>
                    </div>
                    <div class="formLabel">
                      <label for="vegetarian">vegetarian </label><input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("vegetarian")}/>
                    </div>
                    <div class="formLabel">
                      <label for="gluten-free">gluten-free </label><input type="checkbox" id="gluten-free" name="gluten-free" value="gluten-free" onChange={this.handleDietaryChange} checked={this.state.dietaryRestrictions.includes("gluten-free")}/>
                    </div>
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