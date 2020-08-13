import React, { Component } from 'react';

class ListDishes extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  renderDietaryRestrictions = (restrictions) => {
    return restrictions.join(", ");
  }

  render() {
    return (
      <div class="whatTheyreBringing">
          <div class="box whatBringingBox wrapper">
              <h2>Here's What Everyone's Bringing:</h2>
              <ul>
                {
                  (this.props.dishes.length == 0) ? <h3> No dishes yet. Be the first to sign up!</h3> :
                  this.props.dishes.map((singleDish) => {
                    return (  
                          <li key={singleDish.id}>{singleDish.name}: {singleDish.dish} ({this.renderDietaryRestrictions(singleDish.restrictions)}) <button onClick={ () => this.props.deleteDish(singleDish.id)}>Remove</button>
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
