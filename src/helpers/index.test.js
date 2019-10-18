import { max_number } from "./index";

describe("max_number", () => {
  describe("max_number receives an empty array", () => {
    it("returns 0 for an empty array", () => {
      expect(max_number([])).toEqual(0);
    });
  });

  describe("max_number receives an array of numbers", () => {
    it("returns the max for the array of numbers", () => {
      expect(max_number([1, 2, 3])).toEqual(3);
    });
  });
});
