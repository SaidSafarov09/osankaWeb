import { S } from "./OperatingMode_Styles";

export const OperatingMode: React.FC = () => {
  return (
    <S.OperatingMode>
      <S.Title>Режим работы</S.Title>
      <S.Text>C 10:00 до 21:00 (Пн-Пт)</S.Text>
      <S.Text>С 11:00 до 20:00 (Сб-Вс)</S.Text>
    </S.OperatingMode>
  );
};
