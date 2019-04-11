import React from "react";
import { shallow } from "enzyme";
import ResultComponent from "./ResultComponent";

describe("ResultComponent", () => {
  it("should match snapshot", () => {
    expect(shallow(<ResultComponent />)).toMatchSnapshot();
  });
});
