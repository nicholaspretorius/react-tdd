import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);
  it("renders the app correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes `state` with an empty list of gifts", () => {
    expect(app.state("gifts")).toEqual([]);
  });

  describe("when clicking the add button", () => {
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("then adds a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it("then adds a new item to the `gift-list`", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });
  });
});
