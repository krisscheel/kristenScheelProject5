import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dishes: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      console.log(snapshot.val());

      const data = snapshot.val();

      const dishesArray = [];

      for (let propertyName in data) {
        dishesArray.push(data[propertyName]);
      }
      console.log(dishesArray);

      this.setState({
        dishes: dishesArray
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>List of Dishes</h1>

        <ul>
          {
            this.state.dishes.map((dish) => {
              return <li>{dish}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
