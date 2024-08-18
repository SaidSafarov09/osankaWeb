import { NavLink } from "react-router-dom";
import MainLogo from "../../assets/images/mainLogo.png";
import styled from "styled-components";

const LogoMain = styled.img`
  width: 80px;
  heignt: 80px;
  text-align: center;
`;

export const Logo: React.FC = () => {
  return (
    <NavLink to="/">
      <LogoMain src={MainLogo} />
    </NavLink>
  );
};
