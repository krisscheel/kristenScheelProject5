import React, { Component } from 'react';

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Name', dish: 'Dish' };
  }

  handleNameChangeEvent = (event) => {
    this.setState({ name: event.target.value });
  }

  handleDishChangeEvent = (event) => {
    this.setState({ dish: event.target.value });
  }

  handleSubmit = (event) => {
    //alert('A name was submitted: ' + this.state.name + this.state.dish);
    this.props.addDish(this.state.name, this.state.dish);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameChangeEvent}/>
        </label>
        <label>
          Dish:
            <input type="text" name="dish" value={this.state.dish} onChange={this.handleDishChangeEvent}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default DishForm; 