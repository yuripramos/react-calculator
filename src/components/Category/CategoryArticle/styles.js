import styled from "styled-components";
import { rem } from "../../../styles/tools";
import { grey10, red10, black, darkestBlue } from "../../../styles/settings";
import { Link } from "react-router-dom";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};
  width: 100%;
  display: inline-block;
`;

export const CategoryWrapper = styled.div`
  text-align: left;
  padding: ${rem(15)} ${rem(5)};
  min-height: ${rem(100)};
  display: inline-flex;
  flex-wrap: wrap;
  border-bottom: solid 1px ${grey10};
  width: 100%;
  :nth-child(2n) {
    background: rgba(229, 229, 232, 0.1);
  }
`;
export const Clicker = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: ${black};
  font-size: ${rem(30)};
  font-weight: 200;
  line-height: 0.75;
  font-family: "CrimsomText SemiBold";
  margin-top: ${rem(20)};
  width: 100%;
`;

export const Media = styled.img`
  width: ${rem(400)};
  height: ${rem(300)};

`;

export const Notice = styled.div`
  font-family: "OpenSans Regular";
  font-size: ${rem(20)};
  color: ${red10};
  text-align:center;
  height: ${rem(50)};
  display: inline-flex;
  line-height: 45px;
  margin: ${rem(5)};
`;

export const Title = styled.span`
  font-size: ${rem(30)};
  font-weight: 200;
  line-height: 0.75;
  font-family: "CrimsomText SemiBold";
  margin-top: ${rem(20)};
  width: 100%;
`;

export const SubTitle = styled.span`
  margin-top: ${rem(30)};
  font-family: "OpenSans Regular";
  font-weight: normal;
  font-size: ${rem(16)};
  color: ${darkestBlue};
`;


export const PublishedDate = styled.span`
  font-family: "OpenSans Regular";
  font-size: .35em;
  margin: 1.625rem 0;
  letter-spacing: 0.05em;
  color: ${red10};
  width: 100%;
  font-size: .3em;
  margin: ${rem(20)} 0 ${rem(15)} 0;
`;

export const Author = styled.span`
  font-size: .4em;
  line-height: 0.75;
  font-family: "OpenSans Thin";
  margin: ${rem(20)} 0 ${rem(10)} 0;
  width: 100%;
`;
