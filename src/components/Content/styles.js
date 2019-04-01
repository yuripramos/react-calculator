import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(25)} ${rem(10)};
  min-height: ${rem(250)};
  ${media.md(css`
    min-height: ${rem(300)};
    padding: ${rem(50)} ${rem(10)};
  `)};
`;

export const CalcWrapper = styled.div`
  width: 100%;
  height: ${rem(150)};
  background: #FFFFF5;
`;

export const Button = styled.button`
  width: ${rem(80)};
  height: ${rem(80)};
  border: solid 1px #000;
  background: #cdcdee;
  padding: ${rem(3)};
  margin: ${rem(5)};

    ${({ highlight }) =>
    highlight &&
    css`
      background: blue;
    `};
`;

export const Input = styled.input`
  width: ${rem(355)};
  height: ${rem(40)};
`;
