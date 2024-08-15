import { NavLink } from "react-router-dom";
import { Icon } from "../icon/Icon";

export const Logo: React.FC = () => {
  return (
    <NavLink to="/Delote-Beauty/home">
      <Icon idIcon="logoIcon" width="40" height="40" viewBox="0 0 40 40" />
    </NavLink>
  );
};
