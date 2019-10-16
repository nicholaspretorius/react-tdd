import React, { Component } from "react";
import { Button } from "react-bootstrap";

class App extends Component {
  state = {
    gifts: []
  };

  handleAddGift = () => {
    const gift = { id: this.state.gifts.length + 1 };
    const gifts = [...this.state.gifts, gift];
    this.setState({ gifts });
  };

  render() {
    return (
      <div className="container">
        <h2>Hello World!</h2>
        <Button className="btn-add" onClick={this.handleAddGift}>
          Add
        </Button>

        <ul className="gift-list">
          {this.state.gifts.map(gift => (
            <li key={gift.id}>{gift.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
