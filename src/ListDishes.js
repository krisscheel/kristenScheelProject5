import React, { Component } from 'react';

class ListDishes extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  renderDietaryRestrictions = (restrictions) => {
    return restrictions.join();
  }

  render() {
    return (
      <div>
        <h1>List of Dishes</h1>
        <ul>
          {
            this.props.dishes.map((singleDish) => {
              return (
              <li key={singleDish.id}>{singleDish.name} {singleDish.dish} {this.renderDietaryRestrictions(singleDish.restrictions)}
                <button onClick={ () => this.props.deleteDish(singleDish.id)}>Delete this dish</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ListDishes;
