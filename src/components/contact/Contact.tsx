import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";
import styled from "styled-components";
import { S } from "./Contact_Styles";

const B = styled.div`
  margin-top: 26px;
  @media ${theme.media.tablet} {
    margin-top: 20px;
  }
  @media ${theme.media.mobile} {
    margin-top: 16px;
  }
`;

export const Contact: React.FC = () => {
  return (
    <S.Contacts>
      <S.Title>Контакты</S.Title>
      <S.Link href="tel:+79870007191">+7 (987) 000-71-91</S.Link>
      <S.Text>г.Казань, ул. Щапова, 26кБ</S.Text>
      <B>
        <Button />
      </B>
    </S.Contacts>
  );
};
