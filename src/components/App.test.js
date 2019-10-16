import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<App />);

it("renders the app correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes `state` with an empty list of gifts", () => {
  expect(app.state("gifts")).toEqual([]);
});

it("adds a new gift to `state` when clicking the add button", () => {
  app.find(".btn-add").simulate("click");

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it("add a new item to the `gift-list` when clicking the add button", () => {
  app.find(".btn-add").simulate("click");

  expect(app.find(".gift-list").children().length).toEqual(1);
});
