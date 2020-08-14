import React, { Component } from 'react';

class ListDishes extends Component {
  constructor(props) {
    super(props);
  }

  //function to grab each dishes dietary info and contactenate, publish to the page
  renderDietaryRestrictions = (restrictions) => {
    if (restrictions.length == 0) {
      return "";
    } else { 
      return "(" + restrictions.join(", ") + ")";
    }  
  }

  render() {
    return (
      <div class="whatTheyreBringing">
          <div class="box whatBringingBox wrapper">
            <div class="headingBringing">
              <h2>Here's What Everyone's Bringing:</h2>
            </div>
              <ul>
                {
                  (this.props.dishes.length == 0) ? <h3> No dishes yet. Be the first to sign up!</h3> :
                  
                  //mapping through each dish in the dishes array, printing to the page in an unordered list, adding a button to remove the dish
                  this.props.dishes.map((singleDish) => {
                    return (  
                          <li key={singleDish.id}>{singleDish.name}: {singleDish.dish} {this.renderDietaryRestrictions(singleDish.restrictions)} <button onClick={ () => this.props.deleteDish(singleDish.id)}>Remove</button>
                          </li>
                    )
                  })
                }
              </ul>
        </div>
      </div>
    )
  }
}

export default ListDishes;
