import styled from "styled-components";
// import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { S } from "../Price_Styles";

const FlexWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(to right, #1a486c, rgba(255, 255, 255, 0));
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    text-align: start;
  }
`;

const Table2 = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    text-align: start;
  }
  border-top: 1px solid ${theme.colors.font};
  padding-top: 40px;
`;

const Table3 = styled.tr`
  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h5`
  font-family: "Cormorant Garamond";
  font-size: 22px;
  font-weight: 700;
  line-height: 130%;
  text-align: start;
  @media ${theme.media.tablet} {
    font-size: 20px;
  }
  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const Coast = styled.span`
  font-family: "Cormorant Garamond";
  font-size: 27px;
  font-weight: 700;
  line-height: 130%;
  @media ${theme.media.tablet} {
    font-size: 20px;
  }
  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

export const PriceItem: React.FC = () => {
  return (
    <S.Item>
      <FlexWrapperDiv>
        <Table>
          <thead>
            <tr>
              <th>Специалист</th>
              <th>Цена за 60 минут</th>
              <th>Цена за 90 минут</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Title>Массажист</Title>
              </td>
              <td>
                <Coast>2900 ₽</Coast>
              </td>
              <td>
                <Coast>3400 ₽</Coast>
              </td>
            </tr>
            <tr>
              <td>
                <Title>Мастер</Title>
              </td>
              <td>
                <Coast>3500 ₽</Coast>
              </td>
              <td>
                <Coast>4000 ₽</Coast>
              </td>
            </tr>
            <tr>
              <td>
                <Title>Топ массажист</Title>
              </td>
              <td>
                <Coast>4000 ₽</Coast>
              </td>
              <td>
                <Coast>4500 ₽</Coast>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table2>
          <thead>
            <tr>
              <th>Дополнительные услуги</th>
              <th>Время</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Title>Баночный массаж</Title>
              </td>
              <td>
                <Coast>30 минут</Coast>
              </td>
              <td>
                <Coast>1000 ₽</Coast>
              </td>
            </tr>
            <tr>
              <td>
                <Title>Скрабирование</Title>
              </td>
              <td>
                <Coast>30 минут</Coast>
              </td>
              <td>
                <Coast>1000 ₽</Coast>
              </td>
            </tr>
            <tr>
              <td>
                <Title>Фитобочка</Title>
              </td>
              <td>
                <Coast>30 минут</Coast>
              </td>
              <td>
                <Coast>1000 ₽</Coast>
              </td>
            </tr>
          </tbody>
        </Table2>
        <Table2>
          <thead></thead>
          <tbody>
            <Table3>
              <td>
                <Title>Сертификаты</Title>
              </td>
              <td>
                <Coast>3000 ₽</Coast>
              </td>
              <td>
                <Coast>5000 ₽</Coast>
              </td>
              <td>
                <Coast>10.000 ₽</Coast>
              </td>
              <td>
                <Coast>15.000 ₽</Coast>
              </td>
            </Table3>
          </tbody>
        </Table2>
      </FlexWrapperDiv>
      {/* <S.Text>+ обработка кончинков волос</S.Text> */}
    </S.Item>
  );
};
