import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import DishForm from './DishForm';
import ListDishes from './ListDishes';

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
        dishesArray.push(data[propertyName]);
      }

      this.setState({
        dishes: dishesArray
      })
    })
  }

  addDish = (name, dish) => {
    const dbRef = firebase.database().ref();
    var newDishRef = dbRef.set({ name: dish });
    this.fetchDishes();
  }

  render() {
    return (
      <div className="App">
        <h1>testing deployment</h1>
        <DishForm addDish={this.addDish}/>
        <ListDishes dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
