import React, { Component } from "react";
import { shape, func } from "prop-types";
import { Container, Row, Column } from "../../styles/grid";

import { HeaderWrapper, TitleWrapper, Title } from "./styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    this.props.topUserStories([
      "science",
      "technology",
      "health",
      "politics",
      "world"
    ]);
  }

  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Row>
            <Column>
              <TitleWrapper>
                {" "}
                <Title>React Calculator</Title>
              </TitleWrapper>
            </Column>
          </Row>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;

Header.propTypes = {
  topUserStories: func,
  history: shape({
    push: func
  })
};
