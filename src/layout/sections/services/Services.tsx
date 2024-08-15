import { Slide } from "react-awesome-reveal";
import services1 from "../../../assets/images/services/1.jpg";
import services2 from "../../../assets/images/services/2.jpg";
import services3 from "../../../assets/images/services/3.jpg";
import services4 from "../../../assets/images/services/4.jpg";
import services5 from "../../../assets/images/services/5.jpg";
import services6 from "../../../assets/images/services/6.jpg";
import { Container } from "../../../components/Container";
import { S } from "./Services_Styles";
import { ServicesItem } from "./servicesItem/ServicesItem";
import styled from "styled-components";

const LI = styled.li`
  list-style: disc;
  margin-left: 20px;
`;

const P = styled.p`
  text-align: center;
`;
const DIV = styled.div`
  display: flex;
  width: 100%;
`;

const data = [
  {
    id: "services1",
    src: services1,
    text: (
      <>
        <DIV>
          <P>
            Пробный массаж + <br />
            диагностика - 1400 рублей
            <br />
            <br />
            10/15 минут диагностика
            <br />
            45/50 минут массажа спины
            <br />
            <br />
            Массажист собирает анамнез
            <br />
            Проводит диагностику тела и<br />
            дает рекомендации
            <br />
            индивидуально для вас
          </P>
        </DIV>
      </>
    ),
  },
  {
    id: "services6",
    src: services6,
    text: (
      <>
        <ul>
          Расслабляющий массаж:
          <br />
          <br />
          <LI>Классический массаж тела</LI>
          <LI>
            Расслабляющий массаж <br />
            спины
          </LI>
          <LI>Классический массаж лица</LI>
        </ul>
      </>
    ),
  },
  {
    id: "services4",
    src: services4,
    text: (
      <>
        <ul>
          Массаж для спортсменов:
          <br />
          <br />
          <LI>
            Спортивный массаж <br />
            90 минут
          </LI>
          <LI>
            Оздоровительный массаж <br />
            тела
          </LI>
        </ul>
      </>
    ),
  },
  {
    id: "services2",
    src: services2,
    text: (
      <>
        <ul>
          Оздоровительные виды массажа:
          <br />
          <br />
          <LI>
            Оздоровительный/
            <br />
            классический массаж спины
          </LI>
          <LI>Оздоровительный массаж ног</LI>
          <LI>Шейно-воротниковая зона Ну</LI>
        </ul>
      </>
    ),
  },
  {
    id: "services5",
    src: services5,
    text: (
      <>
        <ul>
          Spa программы:
          <br />
          <br />
          <LI>Свидание для двоих</LI>
          <LI>Свидание для себя</LI>
          <LI>Девичник</LI>
          <LI>Спа для беременных</LI>
          <LI>Мужской спа</LI>
          <LI>
            "Солевой детокс и сияние"
            <br />
            фитобочка+солевой массаж
          </LI>
        </ul>
      </>
    ),
  },
  {
    id: "services3",
    src: services3,
    text: (
      <>
        <ul>
          Корректирующий массаж:
          <br />
          <br />
          <LI>Антицеллюлитный массаж</LI>
          <LI>Скульпурно-буккальный</LI>
          <LI>Бразильская попка</LI>
          <LI>Плоский живот</LI>
          <LI>Лимфодренажный массаж</LI>
        </ul>
      </>
    ),
  },
];
export const Services: React.FC = () => {
  return (
    <S.Services>
      <Container>
        <S.ServicesContainer>
          {data.map((item) => (
            <Slide key={item.id}>
              <ServicesItem item={item} />
            </Slide>
          ))}
        </S.ServicesContainer>
      </Container>
    </S.Services>
  );
};
