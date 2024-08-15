import { S } from "./Contact_Styles";

export const Contact: React.FC = () => {
  return (
    <S.Contacts>
      <S.Title>Контакты</S.Title>
      <S.Link href="tel:+79870007191">+7 (987) 000-71-91</S.Link>
      <S.Text>г.Казань, ул. Щапова, 26кБ</S.Text>
    </S.Contacts>
  );
};
