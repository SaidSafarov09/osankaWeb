import { About } from "../../layout/sections/about/About";
import { Main } from "../../layout/sections/main/Main";
import { Services } from "../../layout/sections/services/Services";
import { Cources } from "../../layout/sections/cources/Cources";

export const HomePage: React.FC = () => {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Cources />
    </>
  );
};
