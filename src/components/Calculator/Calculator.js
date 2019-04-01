import React, { Component } from "react";

import { Container, Row, Column } from "../../styles/grid";
import { arrayOf, bool, shape, string, number } from "prop-types";

import ResultComponent from "./ResultComponent";
import KeyPadComponent from "./Keypad";
import { ContentWrapper } from "./styles";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(button) {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  }
  calculate() {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  }

  reset() {
    this.setState({
      result: ""
    });
  }

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }

  render() {
    return (
      <ContentWrapper>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </ContentWrapper>
    );
  }
}

Calculator.defaultProps = {};

// Content.propTypes = {
//   isFilled: bool,
//   FeedArray: arrayOf(
//     shape({
//       title: string,
//       published_date: string,
//       byline: string,
//       url: string,
//       short_url: string,
//       multimedia: arrayOf(
//         shape({
//           url: string,
//           width: number,
//           height:number
//         })
//       )
//     })
//   ),
// };

export default Calculator;
