import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

it("renders the app correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes `state` with an empty list of gifts", () => {
  expect(app.state().gifts).toEqual([]);
});
