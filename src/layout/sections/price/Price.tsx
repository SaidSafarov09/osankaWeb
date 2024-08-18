import { Fade } from "react-awesome-reveal";
import img from "../../../assets/images/prices/1.jpg";

import img2 from "../../../assets/images/prices/2.jpg";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Price_Styles";
import { PriceList } from "./priceList/PriceList";
import { PriceList2 } from "./priceList/PriceList2";
import image from "../../../assets/images/baner2x.jpg";
import styled from "styled-components";

const Main = styled.div`
  background: rgba(0, 0, 0, 0.5) url(${image}) no-repeat center / cover;
  padding: 100px 0 5%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-blend-mode: multiply;
`;

export const Price: React.FC = () => {
  return (
    <Main>
      <S.Price>
        <Container>
          <SectionTitle>Цены на услуги</SectionTitle>
          <S.PriceWrapper>
            <Fade>
              <PriceList mode="auto" />
            </Fade>
            <Fade>
              <S.Image src={img} alt="price" />
            </Fade>
          </S.PriceWrapper>
          <S.PriceWrapper>
            <Fade>
              <PriceList2 mode="auto" />
            </Fade>
            <Fade>
              <S.Image src={img2} alt="price" />
            </Fade>
          </S.PriceWrapper>
        </Container>
      </S.Price>
    </Main>
  );
};
