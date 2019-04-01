import React, { Component } from "react";
import { Result, Line } from "./styles";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    console.log("result", result);
    return (
      <Result>
        <Line>{result}</Line>
      </Result>
    );
  }
}

export default ResultComponent;
