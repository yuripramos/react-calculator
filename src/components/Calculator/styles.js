import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";

export const ContentWrapper = styled.div`
  text-align: center;
  color: #000;
  padding: ${rem(25)} ${rem(10)};
  min-height: ${rem(250)};
  width: 400px;
  margin: 0 auto;
  ${media.md(css`
    min-height: ${rem(300)};
    padding: ${rem(50)} ${rem(10)};
  `)};
`;
