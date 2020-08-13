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

  componentDidMount() {
    this.fetchDishes();
  }

  fetchDishes = () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const dishesArray = [];

      for (let propertyName in data) {
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
        <Header />
        <DishForm addDish={this.addDish} dishes={this.state.dishes} servings={this.state.servings}/>
        <ListDishes dishes={this.state.dishes} deleteDish={this.deleteDish}/>
        <Footer />
      </div>
    );
  }
}

export default App;
