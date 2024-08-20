import { S } from "./OperatingMode_Styles";

export const OperatingMode: React.FC = () => {
  return (
    <S.OperatingMode>
      <S.Title>Режим работы</S.Title>
      <S.Text>C 10:00 до 21:00 (Пн-Вс)</S.Text>
      <S.Title>
        <a href="https://www.instagram.com/os.anka_?igsh=MWQyNDBhM295NHUyYQ==">
          Мы в Instagram
        </a>
      </S.Title>
      <S.Title>
        <a href="https://t.me/+fX8OyupEqC84MTMy">Мы в Telegram</a>
      </S.Title>
    </S.OperatingMode>
  );
};
