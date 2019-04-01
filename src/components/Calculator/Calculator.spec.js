import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("should match snapshot", () => {
    expect(shallow(<Calculator />)).toMatchSnapshot();
  });
});
