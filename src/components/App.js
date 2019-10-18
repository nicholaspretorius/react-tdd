import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "./../helpers";

class App extends Component {
  state = {
    gifts: []
  };

  handleAddGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    const max_ids = max_number(ids); //ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: max_ids + 1 });
    // const gift = { id: this.state.gifts.length + 1 };
    // const gifts = [...this.state.gifts, gift];
    this.setState({ gifts });
  };

  handleRemoveGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
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
            <li key={gift.id}>
              <Gift id={gift.id} removeGift={this.handleRemoveGift} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
