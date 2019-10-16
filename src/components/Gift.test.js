import React from "react";
import { shallow } from "enzyme";

import Gift from "./Gift";

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders the gift correctly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the person input", () => {
    const PERSON = "Nic";
    beforeEach(() => {
      gift.find(".input-person").simulate("change", { target: { value: PERSON } });
    });

    it("updates the person in `state`", () => {
      expect(gift.state().person).toEqual(PERSON);
    });
  });

  describe("when typing into the present input", () => {
    const PRESENT = "wakeboard";
    beforeEach(() => {
      gift.find(".input-present").simulate("change", { target: { value: PRESENT } });
    });

    it("updates the present in `state`", () => {
      expect(gift.state().present).toEqual(PRESENT);
    });
  });
});
