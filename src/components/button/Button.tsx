import styled from "styled-components";
import styles from "./button.module.scss";
import { NavLink } from "react-router-dom";
import { theme } from "../../styles/Theme";

const B = styled.button`
  border: 1px solid #cdaa7d;
  width: 260px;
  padding: 14px 18px;
  font-size: 24px;
  @media ${theme.media.tablet} {
    padding: 12px 16px;
    font-size: 20px;

    width: 200px;
  }
  @media ${theme.media.mobile} {
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const Button = () => {
  return (
    <div>
      <NavLink to="https://n835315.yclients.com/">
        <B>Записаться</B>
      </NavLink>
    </div>
  );
};
