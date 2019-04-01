import React, { Component } from "react";
import { Container, Row, Column } from "../../styles/grid";
import { ContentWrapper, CalcWrapper, Button, Input } from "./styles";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      value: 0,
      operation: ""
    };
    this.addToInput = this.addToInput.bind(this);
    this.multiplyValue = this.multiplyValue.bind(this);
    this.getResult = this.getResult.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(val) {
    this.setState({
      value: val,
      result:[...this.state.result, val]
    }, () => console.log(this.state.result));

  }
  addToInput(val) {
    return null;
  }

  operation(val) {
    this.setState({
      operation: val,
    });
  }

  multiplyValue(val) {
    return null;
  }

  getResult() {
    const { result, value, operation } = this.state;
    if (operation === "division") {
      const res = result[result.length - 2] / result[result.length - 1];
      this.setState({
        value: res
      })
      return res;
    }
    return null;
  }

  render() {
    const { result, value, operation } = this.state;
    return (
      <ContentWrapper>
        <CalcWrapper>
          <Container>
            <Row>
              <Input value={value} />
            </Row>
            <Row>
              <Button onClick={() => this.changeValue(7)}>7</Button>
              <Button onClick={() => this.changeValue(8)}>8</Button>
              <Button onClick={() => this.changeValue(9)}>9</Button>
              <Button onClick={() => this.operation("division")}>/</Button>
            </Row>
            <Row>
              <Button onClick={() => this.addToInput}>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button onClick={() => this.multiplyValue}>x</Button>
            </Row>
            <Row>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>-</Button>
            </Row>
            <Row>
              <Button>0</Button>
              <Button>.</Button>
              <Button highlight onClick={() => this.getResult}>
                =
              </Button>
              <Button>+</Button>
            </Row>
          </Container>
        </CalcWrapper>
      </ContentWrapper>
    );
  }
}

Content.defaultProps = {};


export default Content;
