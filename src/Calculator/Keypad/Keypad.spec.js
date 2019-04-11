import React from "react";
import { shallow } from "enzyme";
import KeyPadComponent from "./KeyPad";

const props = {
  onClick: jest.fn()
};

describe("Keypad component", () => {
  it("should call onClick on ( click", () => {
    const wrapper = shallow(<KeyPadComponent {...props} />);
    wrapper.find("#(").simulate("click", { target: { value: "(" } });
    expect(props.onClick).toHaveBeenCalled();
  });
  it("should call onClick on CE click", () => {
    const wrapper = shallow(<KeyPadComponent {...props} />);
    wrapper.find("#CE").simulate("click", { target: { value: "CE" } });
    expect(props.onClick).toHaveBeenCalled();
  });
  it("should call onClick on ) click", () => {
    const wrapper = shallow(<KeyPadComponent {...props} />);
    wrapper.find("#)").simulate("click", { target: { value: ")" } });
    expect(props.onClick).toHaveBeenCalled();
  });
  it("should call onClick on C click", () => {
    const wrapper = shallow(<KeyPadComponent {...props} />);
    wrapper.find("#C").simulate("click", { target: { value: "C" } });
    expect(props.onClick).toHaveBeenCalled();
  });
});
