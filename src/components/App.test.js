import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  const app = shallow(<App />);
  it("renders the app correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes `state` with an empty list of gifts", () => {
    expect(app.state("gifts")).toEqual([]);
  });

  describe("when clicking the add button", () => {
    const ID = 1;

    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("then adds a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id: ID }]);
    });

    it("then adds a new item to the `gift-list`", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("creates a Gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift", () => {
      beforeEach(() => {
        app.instance().handleRemoveGift(ID);
      });

      it("then removes the gift from `state`", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
