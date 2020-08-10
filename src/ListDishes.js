import React, { Component } from 'react';

class ListDishes extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>List of Dishes</h1>
        <ul>
          {
            this.props.dishes.map((dish, index) => {
              return <li key={index}>{dish}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default ListDishes;
