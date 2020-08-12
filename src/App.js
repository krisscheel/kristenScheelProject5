import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import DishForm from './DishForm';
import ListDishes from './ListDishes';
import Counter from './Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dishes: []
    }
  }

  componentDidMount() {
    this.fetchDishes();
  }

  fetchDishes = () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const dishesArray = [];

      for (let propertyName in data) {
        const dishObject = {
          id: propertyName,
          name: data[propertyName]["name"],
          dish: data[propertyName]["dish"],
          type: data[propertyName]["type"],
          restrictions: data[propertyName]["restrictions"]
        }
        dishesArray.push(dishObject);
      }

      this.setState({
        dishes: dishesArray
      })
    })
  }

  deleteDish = (dishId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(dishId).remove();
  }

  addDish = (name, dish, type, dietaryRestrictions ) => {
    const dbRef = firebase.database().ref();
    dbRef.push({ name: name, dish: dish, type: type, restrictions: dietaryRestrictions });
    this.fetchDishes();
  }

  render() {
    return (
      <div className="App">
        <h1>Potluck!</h1>
        <Counter dishes={this.state.dishes}/>
        <DishForm addDish={this.addDish}/>
        <ListDishes dishes={this.state.dishes} deleteDish={this.deleteDish}/>
        
      </div>
    );
  }
}

export default App;
