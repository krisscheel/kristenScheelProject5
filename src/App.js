import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import Header from './Header';
import DishForm from './DishForm';
import ListDishes from './ListDishes';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super();

    // setting the number of dishes of each type (appetizer, salad, main, dessert) needed.
    const servings = {
      appetizer: 5,
      salad: 5, 
      main: 5,
      dessert: 5
    };

    this.state = {
      dishes: [],
      servings: servings
    }
  }

  //when component is rendered, run the function to get the dishes data from firebase
  componentDidMount() {
    this.fetchDishes();
  }

// function to get dishes data from firebase
  fetchDishes = () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const dishesArray = [];

      for (let propertyName in data) {
        //pushing empty array to firebase returns "null", replacing null value with empty array.
        const restrictions = data[propertyName]["restrictions"] == null ? [] : data[propertyName]["restrictions"];
        const dishObject = {
          id: propertyName,
          name: data[propertyName]["name"],
          dish: data[propertyName]["dish"],
          type: data[propertyName]["type"],
          restrictions: restrictions
        }
        dishesArray.push(dishObject);
      }

      this.setState({
        dishes: dishesArray
      })
    })
  }

  //function to remove dishes from firebase
  deleteDish = (dishId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(dishId).remove();
  }

  //function to add dishes to firebase
  addDish = (name, dish, type, dietaryRestrictions ) => {
    const dbRef = firebase.database().ref();
    dbRef.push({ name: name, dish: dish, type: type, restrictions: dietaryRestrictions });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DishForm addDish={this.addDish} dishes={this.state.dishes} servings={this.state.servings}/>
        <ListDishes dishes={this.state.dishes} deleteDish={this.deleteDish}/>
        <Footer />
      </div>
    );
  }
}

export default App;
