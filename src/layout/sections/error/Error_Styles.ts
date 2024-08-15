import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";

const Error = styled.section`
  padding: 180px 0 100px;
  @media ${theme.media.tablet} {
    padding: 180px 0 65px;
  }
  @media ${theme.media.mobile} {
    padding: 180px 0 30px;
  }

  ${SectionTitle} {
    color: ${theme.colors.borderColor};
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 1;

  margin-bottom: 24px;
  width: 40%;
`;
const Link = styled.a`
  font-family: "Cormorant Garamond";
  display: inline-block;
  position: relative;
  font-size: 26px;
  font-weight: 700;
  transition: ${theme.animations.transition};
  line-height: 140%;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    display: inline-block;
    height: 2px;
    transition: ${theme.animations.transition};
    background-color: ${theme.colors.font};
  }

  &:hover {
    color: ${theme.colors.borderColor};
  }
  &:hover:after {
    background-color: ${theme.colors.borderColor};
  }
`;

export const S = { Error, Image, Link };
