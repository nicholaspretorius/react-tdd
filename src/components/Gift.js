import React from "react";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

class Gift extends React.Component {
  //   state = {
  //     gift: {
  //       person: "",
  //       present: ""
  //     }
  //   };

  state = {
    person: "",
    present: ""
  };

  //   handleChange = ({ target }) => {
  //     const { name, value } = target;
  //     const gift = { ...this.state.gift };
  //     gift[name] = value;
  //     this.setState({ gift });
  //   };

  render() {
    // const { person } = this.state.gift;
    const { id, removeGift } = this.props;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={event => {
                const person = event.target.value;
                event.target.value = "";
                return this.setState({ person });
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={event => {
                const present = event.target.value;
                event.target.value = "";
                return this.setState({ present });
              }}
            />
          </FormGroup>
          <Button onClick={() => removeGift(id)} className="btn-remove">
            Remove
          </Button>
        </Form>
      </div>

      /* <label htmlFor="person">Person</label>
          <input
            type="text"
            name="person"
            className="input-person"
            placeholder="Enter the person's name"
            value={person}
            onChange={this.handleChange}
          /> */
    );
  }
}

export default Gift;
