import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import { lighestgrey, trueWhite } from "../../../styles/settings";

export const KeypadWrapper = styled.div`
  text-align: center;
  color: ${trueWhite};
  margin: 0 ${rem(20)};
  padding: 0 ${rem(5)};
`;

export const Button = styled.button`
  width: ${rem(70)};
  height: ${rem(70)};
  font-size: ${rem(20)};
  background: ${lighestgrey};
`;
