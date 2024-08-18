import styled from "styled-components";
// import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { S } from "../Price_Styles";
import { SectionTitle } from "../../../../components/SectionTitle";

const FlexWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(to right, #1a486c, rgba(255, 255, 255, 0));
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    text-align: start;
    font-size: 20px;
    @media ${theme.media.mobile} {
      font-size: 16px;
    }
  }
`;

const Title = styled.h5`
  font-family: "Cormorant Garamond";
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  text-align: start;
  text-transform: uppercase;
  @media ${theme.media.tablet} {
    font-size: 20px;
  }
  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const DescriptionList = styled.ul`
  margin: 0;
  font-size: 20px;
  @media ${theme.media.mobile} {
    font-size: 16px;
  }

  li {
    list-style: disc;
    padding: 5px 0;
  }
`;

export const PriceItem2: React.FC = () => {
  return (
    <S.Item>
      <FlexWrapperDiv>
        <SectionTitle>Виды массажа</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Тип массажа</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Title>Расслабляющий</Title>
              </td>
              <td>
                <DescriptionList>
                  <li>Классический массаж тела</li>
                  <li>Массаж спины</li>
                  <li>Классический массаж лица</li>
                </DescriptionList>
              </td>
            </tr>
            <tr>
              <td>
                <Title>Корректирующий</Title>
              </td>
              <td>
                <DescriptionList>
                  <li>Антицеллюлитный массаж</li>
                  <li>Скульпутно-буккальный</li>
                  <li>Бразильская попка</li>
                  <li>Плоский животик</li>
                  <li>Лимфодренажный массаж</li>
                </DescriptionList>
              </td>
            </tr>
            <tr>
              <td>
                <Title>Оздоровительный / Cпортивный</Title>
              </td>
              <td>
                <DescriptionList>
                  <li>Оздоровительный массаж ног</li>
                  <li>Споритвный массаж тела</li>
                  <li>Массаж шейно-воротниковой зоны</li>
                  <li>Оздоровительный массаж спины</li>
                </DescriptionList>
              </td>
            </tr>
          </tbody>
        </Table>
      </FlexWrapperDiv>
      {/* <S.Text>+ обработка кончинков волос</S.Text> */}
    </S.Item>
  );
};
